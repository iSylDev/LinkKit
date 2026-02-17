import { useQuery } from "@tanstack/react-query";
import supabase from "@/components/ui/utils/supabase";

export function useUser() {
  return useQuery({
    queryKey: ['auth-user'],
    queryFn: async () => {
      const { data: { session}, error } = await supabase.auth.getSession();
      if (error) throw new Error;
      return session?.user ?? null;
    },
    staleTime: 1000 * 60 * 60
  })
}