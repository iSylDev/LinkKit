import { createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import {
  DASHBOARD,
  SIGNIN,
} from '../routes/routesConstants';
import { Route } from 'react-router-dom';

import SignInPage from '../pages/SignIn/SignInPage.tsx';
import Dashboard from '../pages/Dashboard.tsx';
import { AuthInitializer } from './Auth/AuthInitializer.tsx';
import ProtectedRoute from '@/pages/ProtectedRoute.tsx';
import PublicRoute from '@/pages/PublicRoute.tsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AuthInitializer />}>
      {/* Authenticated Users only */}
      <Route element={<ProtectedRoute />}>
        <Route index element={<Navigate to={DASHBOARD} replace />} />
        <Route path={DASHBOARD} element={<Dashboard />} />
      </Route>

      {/* Guests Only */}
      <Route element={<PublicRoute />} >
        <Route path={SIGNIN} element={<SignInPage />} />
      </Route>
      <Route path='*' element={<Navigate to={`/${DASHBOARD}`} replace />} />
    </Route>
  ))
export default router;

