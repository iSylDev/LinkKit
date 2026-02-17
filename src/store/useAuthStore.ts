import { create } from "zustand";
import supabase from "@/components/ui/utils/supabase";
import { type User, type Provider } from "@supabase/supabase-js";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string;
  signInWithProvider: (provider: Provider) => Promise<void>;
  setUser: (user: User | null) => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: "",

  // Sign in Function
  signInWithProvider: async (provider: Provider) => {
    set({ isLoading: true });

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo:
            typeof window !== "undefined" ? window.location.origin : "",
        },
      });
      if (error) throw error;
    } catch (error: any) {
      set({ error: error.message || `Error signing in with ${provider}` });
    } finally {
      set({ isLoading: false });
    }
  },
  // Sign out Function
  signOut: async () => {
    set({ isLoading: true, error: "" });

    try {
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;

      set({ user: null });
    } catch (error: any) {
      set({ error: error.message || "Failed to sign out" });
    } finally {
      set({ isLoading: false });
    }
  },

  setUser: (user) => set({ user, isLoading: false }),
}));
