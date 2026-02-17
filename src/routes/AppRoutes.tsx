import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import {
  DASHBOARD,
  FORGOT_PASSWORD,
  SIGNIN,
} from '../routes/routesConstants';
import { Route } from 'react-router-dom';

import SignInPage from '../pages/SignIn/SignInPage.tsx';
import ForgotPasswordPage from '../pages/ForgotPassword.tsx';
import Dashboard from '../pages/Dashboard.tsx';
import { AuthInitializer } from './Auth/AuthInitializer.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<AuthInitializer />}
    >
      <Route path={`/${SIGNIN}`} element={<SignInPage />} />
      <Route path={`/${FORGOT_PASSWORD}`} element={<ForgotPasswordPage />} />
      <Route path={`/${DASHBOARD}`} element={<Dashboard />} />
    </Route>
  )
)

export default router;