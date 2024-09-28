import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

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