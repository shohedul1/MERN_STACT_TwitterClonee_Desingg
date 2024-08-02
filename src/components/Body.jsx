import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Home from "./Home";
import Feed from "./Feed";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true, // This makes Feed the default component at the base path
          element: <Feed />
        },
        {
          path: "profile", // Note: remove the leading slash for child routes
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
