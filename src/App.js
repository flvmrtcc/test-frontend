import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import ErrorPage from './pages/ErrorPage';
import { UsersProvider } from './UsersContext';
import { UsersCheckedProvider } from './UsersCheckedContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:userID",
    element: <UserPage />,
  },
]);

export default function App() {
  return (
    <UsersProvider>
      <UsersCheckedProvider>
        <RouterProvider router={router} />
      </UsersCheckedProvider>
    </UsersProvider>
  );
}
