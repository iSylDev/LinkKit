import { createRoutesFromElements } from 'react-router-dom';
import {
  DASHBOARD,
  FORGOT_PASSWORD,
  SIGNIN,
  SIGNUP,
  AUTH
} from '../routes/routesConstants';
import { Route } from 'react-router-dom';

import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ForgotPasswordPage from '../pages/ForgotPassword';

const AppRoutes = () => {
  const routeDefinitions = createRoutesFromElements(
    <Route path='/' >
      <Route path={`/${SIGNIN}`} element={ <SignInPage /> } />
      <Route path={`/${SIGNUP}`} element={ <SignUpPage /> } />
      <Route path={`/${FORGOT_PASSWORD}`} element={ <ForgotPasswordPage /> } />
      <Route path={`/${DASHBOARD}`} element={<DASHBOARD />} />
    </Route>
  )
  return ( 
    null
   );
}
 
export default AppRoutes;