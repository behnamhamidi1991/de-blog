import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "./Pages/ErrorPage/Errorpage";
import Applayout from "./layout/Applayout";
import Homepage from "./Pages/Homepage/Homepage";
import Blogpage from "./Pages/Blog/Blogpage";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/blog", element: <Blogpage /> },
      { path: "/error", element: <Errorpage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
