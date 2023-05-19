import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Repositorio } from './pages/Repositorio/Repositorio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/repositorio/:repositorio",
    element: <Repositorio />
  }
]);

export const Routes = () => {
  return <RouterProvider router={router} />
};