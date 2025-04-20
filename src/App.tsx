import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./layout/Applayout";
import Errorpage from "./pages/ErrorPage/Errorpage";
import Homepage from "./pages/Homepage/Homepage";
import Blogpage from "./pages/Blog/Blogpage";
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
