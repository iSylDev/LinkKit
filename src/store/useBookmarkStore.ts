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
      )
      `,
        )
        .order("created_at", { ascending: false });

      if (error) throw error;
      const cleaned = data.map((b: any) => ({
        ...b,
        tags: b.bookmark_tags.map((bt: any) => bt.tags.name),
      }));
      set({ bookmarks: cleaned });
    } catch (error: any) {
      set({ error: error.message || "Failed to fetch bookmarks" });
    } finally {
      set({ isLoading: false })
    }

  },
  addBookmark: async () => {},
}));
