import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import ErrorPage from './pages/ErrorPage';
import { UsersContext } from './UsersContext';
import { useEffect, useState } from 'react';


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
  const uri = "https://reqres.in/api/users";
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch(uri)
      .then(response => response.json())
      .then((data) => {
        // console.log(data.data);
        setUsersData(data.data);
      })
      .catch(console.error);
  }, []);

  return (
    <UsersContext.Provider value={usersData}>
      <RouterProvider router={router} />
    </UsersContext.Provider>
  );
}
