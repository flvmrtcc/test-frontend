import { useEffect, useState } from 'react';
import './App.css';
import UsersList from './components/UsersList';

export default function App() {
  const uri = "https://reqres.in/api/users";
  const [availableUsersData, setAvailableUsersData] = useState([]);
  const [checkedUsersData, setCheckedUsersData] = useState([]);

  useEffect(() => {
    fetch(uri)
      .then(data => data.json())
      .then(data => data.data)
      .then(setAvailableUsersData)
      .catch(console.error);
  });

  return (
    <div className="App">

      <div className="flexcontainer">
        <UsersList listName={"Utenti disponibili"} usersData={availableUsersData} />
        <UsersList listName={"Utenti controllati"} usersData={checkedUsersData} />
      </div>

    </div>
  );
}
