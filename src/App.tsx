import { createBrowserRouter, json, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import { searchPackage } from './services/registry-service';

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
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const term = url.searchParams.get('term');
          if (term) {
            return json(await searchPackage(term));
          }
          return null;
        },
      },
      {
        path: '/details/:name',
        element: <DetailsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
