import { Spinner } from "@/components/ui/spinner";
import { DASHBOARD } from "@/routes/routesConstants";
import { useAuthStore } from "@/store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";



const PublicRoute = () => {
  const { user, isLoading } = useAuthStore();
  if (isLoading) return <Spinner />;
  return !user ? <Outlet /> : <Navigate to={`/${DASHBOARD}`} replace />
}

export default PublicRoute;