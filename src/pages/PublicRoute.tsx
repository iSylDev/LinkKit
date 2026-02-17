import { Spinner } from "@/components/ui/spinner";
import { useUser } from "@/hooks/useUser";
import { DASHBOARD } from "@/routes/routesConstants";
import { Navigate, Outlet } from "react-router-dom";



const PublicRoute = () => {
  const { data: user, isLoading } = useUser();
  if (isLoading) return <Spinner />;
  return !user ? <Outlet /> : <Navigate to={`/${DASHBOARD}`} replace />
}

export default PublicRoute;