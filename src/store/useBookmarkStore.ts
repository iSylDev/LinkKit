import supabase from "@/components/ui/utils/supabase";
import type { Bookmark } from "@/types";
import { create } from "zustand";

interface BookmarkState {
  bookmarks: Bookmark[];
  isLoading: boolean;
  error: string;
  fetchBookmarks: () => Promise<void>;
  addBookmark: (
    url: string,
    image_url: string | null,
    title: string,
    description: string,
    tags: string[],
  ) => Promise<void>;
}

export const useBookmarkStore = create<BookmarkState>((set, get) => ({
  bookmarks: [],
  isLoading: false,
  error: "",
  // FUNCTION TO FETCH B
  // OOKMARKS FROM SUPABASE
  fetchBookmarks: async () => {
    set({ isLoading: true });
    set({ error: "" });

    try {
      const { data, error } = await supabase
        .from("bookmarks")
        .select(
          `
      *,
      bookmark_tags (
        tags (name)
      )`,
        )
        .order("created_at", { ascending: false });

      if (error) throw error;

      const cleanedData = data.map((b: any) => ({
        ...b,
        tags: b.bookmark_tags?.map((bt: any) => bt.tags.name).filter(Boolean) || []
      }));
      set({ bookmarks: cleanedData });
    } catch (error: any) {
      set({ error: error.message || "Failed to fetch bookmarks" });
    } finally {
      set({ isLoading: false });
    }
  },

  // FUNCTION TO CREATE A NEW BOOKMARK
  addBookmark: async (url, image_url, title, description, tags) => {
    set({ isLoading: true });

    try {
      //  Insert the new bookmark
      const { data: newBookmark, error: createBookmarkError } = await supabase
        .from("bookmarks")
        .insert([{ url, image_url, title, description }])
        .select()
        .single();

      if (createBookmarkError) throw createBookmarkError;

      // Upsert Tags
      const { data: upsertedTags, error: upsertError } = await supabase
        .from("tags")
        .upsert(
          tags.map((name) => ({ name })),
          { onConflict: "name" },
        )
        .select();

      if (upsertError) throw upsertError;

      // Link Bookmark to tags
      if (upsertedTags && upsertedTags.length > 0) {
        const mergedData = upsertedTags.map((tag) => ({
          bookmark_id: newBookmark.id,
          tag_id: tag.id,
        }));

        const { error: mergeError } = await supabase
          .from("bookmark_tags")
          .insert(mergedData);

        if (mergeError) throw mergeError;
      }

      // Update local ui state to reflect immediately
      const fullBookmark = { ...newBookmark, tags };
      set((state) => ({
        bookmarks: [fullBookmark, ...state.bookmarks],
      }));
    } catch (error: any) {
      set({ error: error.message || "Error creating bookmark" });
    } finally {
      set({ isLoading: false });
    }
  },
}));
