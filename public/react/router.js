import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthenticationPage from "./pages/Authentication";
import DashBoard from "./pages/DashBoard";
import DetailsPage from "./pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <AuthenticationPage /> },
      {
        path: "home",
        element: <HomePage />,
        children: [
          { index: true, element: <DashBoard /> },
          { path: ":id", element: <DetailsPage /> },
        ],
      },
    ],
  },
]);

export default router;
