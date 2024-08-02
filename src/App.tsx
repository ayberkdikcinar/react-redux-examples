import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';

import { searchLoader } from './utils/searchLoader';
import { detailsLoader } from './utils/detailsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
        loader: async ({ request }) => await searchLoader(request),
      },
      {
        path: '/details/:name',
        element: <DetailsPage />,
        loader: detailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
