import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./pages/login";
import Home from "./_components/home";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
    {

        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/home",
                element: <Home />
            }
        ]

    }
]);