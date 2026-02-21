import supabase from "@/components/ui/utils/supabase";
import type { Bookmark } from "@/types";
import type { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface BookmarkState {
  bookmarks: Bookmark[];
  isLoading: boolean;
  error: string;
  fetchBookmarks: () => Promise<Bookmark[]>;
  view: (e: React.MouseEvent<HTMLDivElement>, website_url: string) => void;
  pin: (id: string, user_id: string, currentStatus: boolean) => Promise<void>;
  archive: (
    id: string,
    user_id: string,
    currentStatus: boolean,
  ) => Promise<void>;
  delete: (id: string, user_id: string) => Promise<void>;
  copy: (website_url: string) => Promise<string>;
  addBookmark: (
    user: User,
    url: string,
    image_url: string | null,
    title: string,
    description: string,
    tags: string[],
  ) => Promise<void>;
  edit: (
    id: string,
    updates: {
      title: string;
      description: string;
      url: string;
      tags: string[];
    },
  ) => Promise<void>;
}

export const useBookmarkStore = create<BookmarkState>((set) => ({
  bookmarks: [],
  isLoading: false,
  error: "",

  // /////////////////////////////////////////
  // FUNCTION TO FETCH BOOKMARKS FROM SUPABASE
  // /////////////////////////////////////////

  fetchBookmarks: async (): Promise<Bookmark[]> => {
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
        tags:
          b.bookmark_tags?.map((bt: any) => bt.tags.name).filter(Boolean) || [],
      }));
      set({ bookmarks: cleanedData });
      return cleanedData;
    } catch (error: any) {
      set({ error: error.message || "Failed to fetch bookmarks" });
      throw new Error(error.message);
    } finally {
      set({ isLoading: false });
    }
  },

  // /////////////////////////////////
  // FUNCTION TO CREATE A NEW BOOKMARK
  // /////////////////////////////////
  addBookmark: async (user, url, image_url, title, description, tags) => {
    set({ isLoading: true });
    set({ error: "" });

    try {
      // Trim whitespaces in tags
      const cleanTagNames = tags
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

      //  Insert the new bookmark
      const { data: newBookmark, error: createBookmarkError } = await supabase
        .from("bookmarks")
        .insert([{ url, image_url, title, description, user_id: user.id }])
        .select()
        .single();

      if (createBookmarkError) throw createBookmarkError;

      // Upsert Tags
      const { data: upsertedTags, error: upsertError } = await supabase
        .from("tags")
        .upsert(
          cleanTagNames.map((name) => ({ name })),
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
        console.log("Bookmark created successfully");
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

  // /////////////////////
  // Pin Bookmark Function
  // /////////////////////

  pin: async (id: string, user_id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from("bookmarks")
        .update({ is_pinned: !currentStatus })
        .eq("id", id)
        .eq("user_id", user_id);

      if (error) throw error;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  // View Bookmark
  view: (e, website_url: string) => {
    e.stopPropagation();
    window.open(website_url, "_blank", "noopener,noreferrer");
  },

  // //////////////////////
  // Edit Bookmark Function
  // //////////////////////
  edit: async (id: string, { title, description, url, tags }) => {
    try {
      const { error: updateError } = await supabase
        .from("bookmarks")
        .update({ title, description, url })
        .eq("id", id);

      if (updateError) throw updateError;

      const cleanTagNames = tags
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

      const { data: upsertedTags, error: tagError } = await supabase
        .from("tags")
        .upsert(
          cleanTagNames.map((name) => ({ name })),
          { onConflict: "name" },
        )
        .select();
      if (tagError) throw tagError;

      // Sync Join Table
      await supabase.from("bookmark_tags").delete().eq("bookmark_id", id);

      if (upsertedTags && upsertedTags.length > 0) {
        const linkedBookmark = upsertedTags.map((tag) => ({
          bookmark_id: id,
          tag_id: tag.id,
        }));
        const { error: linkError } = await supabase
          .from("bookmark_tags")
          .insert(linkedBookmark);

        if (linkError) throw linkError;
      }
      return;
    } catch (error: any) {
      throw error;
    }
  },

  // ///////////////////////
  // Copy Bookmark Function
  // ///////////////////////
  copy: async (website_url) => {
    try {
      navigator.clipboard.writeText(website_url);
      console.log("Copied to clipboard");
      return "Copied to Clipboard.";
    } catch (error) {
      return "Failed to copy to clipboard.";
    }
  },

  archive: async (id: string, user_id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from("bookmarks")
        .update({ is_archived: !currentStatus })
        .eq("id", id)
        .eq("user_id", user_id);

      if (error) throw error;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  delete: async (id: string, user_id: string) => {
    try {
      const { error: tagsDeleteError } = await supabase
        .from("bookmark_tags")
        .delete()
        .eq("bookmark_id", id);

      if (tagsDeleteError) throw tagsDeleteError;

      const { error: deleteBookmarkError } = await supabase
        .from("bookmarks")
        .delete()
        .eq("id", id)
        .eq("user_id", user_id);

      if (deleteBookmarkError) throw deleteBookmarkError;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
}));
