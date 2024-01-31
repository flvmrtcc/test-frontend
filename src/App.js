import './App.css';
import UsersList from './components/UsersList';
import availableUsersData from './data.json'; 

export default function App() {
  
  return (
    <div className="App">

      <div className="flexcontainer">
        <UsersList listName={"Utenti disponibili"} usersData={availableUsersData} />
        <UsersList listName={"Utenti controllati"} />
      </div>

    </div>
  );
}
