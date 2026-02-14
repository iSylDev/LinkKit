import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import {
  DASHBOARD,
  FORGOT_PASSWORD,
  SIGNIN,
  SIGNUP,
} from '../routes/routesConstants';
import { Route } from 'react-router-dom';

import SignInPage from '../pages/SignInPage.tsx';
import SignUpPage from '../pages/SignUpPage.tsx';
import ForgotPasswordPage from '../pages/ForgotPassword.tsx';
import Dashboard from '../pages/Dashboard.tsx';

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' >
        <Route path={`/${SIGNIN}`} element={<SignInPage />} />
        <Route path={`/${SIGNUP}`} element={<SignUpPage />} />
        <Route path={`/${FORGOT_PASSWORD}`} element={<ForgotPasswordPage />} />
        <Route path={`/${DASHBOARD}`} element={<Dashboard />} />
      </Route>
    )
  )

export default router;