import { Spinner } from "@/components/ui/spinner";
import { useUser } from "@/hooks/useUser";
import { SIGNIN } from "@/routes/routesConstants";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading) return <Spinner />

  return user ? <Outlet /> : <Navigate to={`/${SIGNIN}`} replace />
}

export default ProtectedRoute;