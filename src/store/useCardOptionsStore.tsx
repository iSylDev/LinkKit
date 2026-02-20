import supabase from "@/components/ui/utils/supabase";
import { create } from "zustand";

interface CardOptions {
  view: (e: React.MouseEvent<HTMLElement>, website_url: string) => void;
  copy: (website_url: string) => Promise<string>;
  edit:
  (id: string,
    updates: {
      title: string,
      description: string,
      url: string,
      tags: string[]
    }) => Promise<void>;
  archive: (id: string, user_id: string) => void;
};

export const useCardOptionStore = create<CardOptions>((set) => ({
  view: (e, website_url: string) => {
    e.stopPropagation()
    window.open(website_url, "_blank", "noopener,noreferrer");
  },
  copy: async (website_url) => {
    try {
      navigator.clipboard.writeText(website_url);
      console.log('Copied to clipboard');
      return 'Copied to Clipboard.'
    } catch (error) {
      return 'Failed to copy to clipboard.'
    }
  },

  edit: (id: string, user_id: string) => {

  },
  archive: (id: string, user_id: string) => {

  }
}))