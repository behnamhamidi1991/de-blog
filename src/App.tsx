import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./Components/layout/Applayout";
import Errorpage from "./Components/Pages/ErrorPage/Errorpage";
import Homepage from "./Components/Pages/Homepage/Homepage";
import Blogpage from "./Components/Pages/Blog/Blogpage";
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
