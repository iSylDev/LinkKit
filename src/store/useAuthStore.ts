import { create } from "zustand";
import supabase from "@/components/ui/utils/supabase";
import { type User } from "@supabase/supabase-js";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string;
  signInWithDiscord: () => Promise<void>;
  setUser: (user: User | null) => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: "",

  signInWithDiscord: async () => {
    set({ isLoading: true });

    try {
      const { error: discordSigninError } = await supabase.auth.signInWithOAuth(
        {
          provider: "discord",
          options: {
            redirectTo: window.location.origin,
          },
        },
      );

      if (discordSigninError) throw discordSigninError;
    } catch (error: any) {
      set({ error: error.message || "Error signing in with Discord." });
    } finally {
      set({ isLoading: false });
    }
  },

  signOut: async () => {
    set({ isLoading: true, error: "" });

    try {
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;

      set({ user: null });
    } catch (error: any) {
      set({ error: error.message || 'Failed to sign out' });
    } finally {
      set({ isLoading: false })
    }
  },

  setUser: (user) => set({ user, isLoading: false }),
}));
