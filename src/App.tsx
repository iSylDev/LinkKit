import { RouterProvider } from 'react-router-dom'
import router from './routes/AppRoutes'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react';
import supabase from './components/ui/utils/supabase';

function App() {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    // 1. Check if a session already exists on page load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);


  return <RouterProvider router={router} />
}

export default App
