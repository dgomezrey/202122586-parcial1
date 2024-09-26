import { createBrowserRouter, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
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
                element: <h1>Home</h1>
            }
        ]

    }
]);