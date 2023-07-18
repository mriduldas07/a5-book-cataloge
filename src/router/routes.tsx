import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookDetails from "../pages/BookDetails";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
    ],
  },
]);

export default routes;
