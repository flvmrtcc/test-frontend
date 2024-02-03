import { useContext } from "react";
import UsersList from "../components/UsersList";
import { UsersContext } from "../UsersContext";

export default function Home() {
    const usersData = useContext(UsersContext);

    return (
        <div className="">
            <h1 className="text-center pt-3 m-4 ">Gestione Utenti</h1>

            <div className="flexcontainer">
                <UsersList listName={"Utenti disponibili"} usersData={usersData} />
                <UsersList listName={"Utenti controllati"} usersData={[]} />
            </div>

        </div>
    );
}
