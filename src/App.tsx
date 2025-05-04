import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "./Pages/ErrorPage/Errorpage";
import Applayout from "./layout/Applayout";
import Homepage from "./Pages/Homepage/Homepage";
import Blogpage from "./Pages/Blog/Blogpage";
import Privacy from "./Pages/Privacy/Privacy";
import Contactpage from "./Pages/Contact/Contactpage";
import Terms from "./Pages/Terms/Terms";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/blog", element: <Blogpage /> },
      { path: "/error", element: <Errorpage /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },
      { path: "/contact", element: <Contactpage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
