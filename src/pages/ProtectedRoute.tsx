import { Spinner } from "@/components/ui/spinner";
import { SIGNIN } from "@/routes/routesConstants";
import { useAuthStore } from "@/store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
  const { user, isLoading } = useAuthStore();

  if (isLoading) return <Spinner />

  return user ? <Outlet /> : <Navigate to={`/${SIGNIN}`} replace />
}

export default ProtectedRoute;