import { useAuthStore } from "@/store/useAuthStore";
import { Outlet, replace, useNavigate } from "react-router-dom";
import supabase from "../../components/ui/utils/supabase";
import { useEffect } from "react";
import { DASHBOARD, SIGNIN } from "../routesConstants";
import { useQueryClient } from "@tanstack/react-query";

export const AuthInitializer = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: {subscription} } = supabase.auth.onAuthStateChange((event,session) =>{
      const user = session?.user ?? null;

      // Manually update the 'auth-user' cache to trigger immediate component reaction
      queryClient.setQueryData(['auth-user'], user);

      if ( event === 'SIGNED_IN') {
        navigate(`/${DASHBOARD}`, {replace: true})
      }
      if (event === 'SIGNED_OUT') {
        queryClient.setQueryData(['auth-user'], null)
        navigate(`/${SIGNIN}`, {replace: true})
      }
    });

    return () => subscription.unsubscribe();
  }, [queryClient, navigate])

  return <Outlet />
}