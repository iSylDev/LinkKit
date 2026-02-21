import supabase from "@/components/ui/utils/supabase";
import { create } from "zustand";

interface CardOptions {

  
  archive: (id: string, user_id: string) => void;
};

export const useCardOptionStore = create<CardOptions>((set) => ({


 
}))