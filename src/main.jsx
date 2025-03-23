import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx'; // Import your layout
import HomePage from './pages/HomePage.jsx'; // Import the HomePage component
import HotelDetails from './pages/hotels/hotelDetails.jsx';
import Hotels from './pages/hotels/hotels.jsx';
import GuideDetails from './pages/guides/guideDetails.jsx'; // Import GuideDetails for guides
import Guides from './pages/guides/guides.jsx'; // Import Guides for listing guides
import StoryDetails from './pages/stories/storyDetails.jsx'; // Import StoryDetails for stories
import Stories from './pages/stories/stories.jsx'; // Import Stories for listing stories
import ErrorPage from './pages/ErrorPage.jsx';
import './index.css';
import '@fontsource/firago';
import './assets/styles/font-face.css';

if (import.meta.hot) {
  import.meta.hot.on(
    'vite:beforeUpdate',
    /* eslint-disable-next-line no-console */
    () => console.clear()
  );
}

// Create the router with the MainLayout applied to all routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Apply MainLayout to all routes
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Index route for the root URL
        element: <HomePage />, // Render HomePage at the root URL
        errorElement: <ErrorPage />,
      },
      {
        path: 'hotels',
        element: <Hotels />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'hotels/:id',
        element: <HotelDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'guides',
        element: <Guides />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'guides/:id',
        element: <GuideDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'stories',
        element: <Stories />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'stories/:id',
        element: <StoryDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
