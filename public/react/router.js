import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthenticationPage from "./pages/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <AuthenticationPage /> },
      { path: "home", element: <HomePage /> },
    ],
  },
]);

export default router;
