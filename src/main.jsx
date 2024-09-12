import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HotelDetails from "./components/HotelDetails.jsx";
import GuideDetails from "./components/GuideDetails.jsx";
import Hotels from "./components/Hotels.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import "./index.css";
import "@fontsource/firago";
import '@fontsource/kalam';
import "./assets/styles/font-face.css";

if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    /* eslint-disable-next-line no-console */
    () => console.clear()
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hotels",
    element: <Hotels />,
    errorElement: <ErrorPage />,
  },
  {
    path: "hotels/:hotelId",
    element: <HotelDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "guides",
    element: <GuideDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "guides/:guideId",
    element: <GuideDetails />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
