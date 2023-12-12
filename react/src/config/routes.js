import {
  HOME_PAGE,
  SIGN_IN_PAGE,
  SIGN_UP_PAGE,
  NOT_FOUND,
  PRODUCTS,
} from "../constants/routes";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../pages/not-found/index";

import AuthGuard from "../Guard/AuthGuard";
import GustGuard from "../Guard/GustGuard";
import Details from "../pages/Details/Details";

const routes = [
  {
    path: HOME_PAGE,
    Component: Home,
    Guard: AuthGuard,
  },
  {
    path: SIGN_IN_PAGE,
    Component: SignIn,
    Guard: GustGuard,
  },
  {
    path: SIGN_UP_PAGE,
    Component: SignUp,
    Guard: GustGuard,
  },
  {
    path: NOT_FOUND,
    Component: NotFound,
  },
  {path:PRODUCTS,
    Component:Details,
    Guard:AuthGuard
  },
];

export default routes;
