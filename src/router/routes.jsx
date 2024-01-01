import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import NotFound from "../page/NotFound/NotFound";
import Home from "../page/Home/Home";
import About from './../page/About/About';
import Contact from "../page/Contact/Contact";
import Jobs from "../page/Jobs/Jobs";
import SingUp from "../page/Auth/SingUp/SingUp";
import Login from "../page/Auth/LogIn/Login";
import Favorite from "../page/Favorite/Favorite";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/jobs",
        element: <Jobs />
      },
      {
        path: "/jobs",
        element: <Jobs />
      },
      // {
      //   path: "users/:userId",
      //   element: <Singale />,
      //   loader: async ({ params }) =>
      //     await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      // },
    ],
  },
  {
    path: "/singup",
    element: <SingUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
