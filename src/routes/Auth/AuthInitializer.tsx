import { useAuthStore } from "@/store/useAuthStore";
import { Outlet, useNavigate } from "react-router-dom";
import supabase from "../../components/ui/utils/supabase";
import { useEffect } from "react";

export const AuthInitializer = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Initial Check
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // 2. Auth Listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      
      if (event === 'SIGNED_IN') {
        // Use { replace: true } to clean up the URL hash (/#access_token=...)
        navigate('/dashboard', { replace: true });
      }
      if (event === 'SIGNED_OUT') {
        navigate('/sign-in');
      }
    });

    return () => subscription.unsubscribe();
  }, [setUser, navigate])

  return <Outlet />
}