import { useEffect, useState } from "react";
import UsersList from "../components/UsersList";

export default function Home() {
    const uri = "https://reqres.in/api/users";
    const [availableUsersData, setAvailableUsersData] = useState([]);
    const [checkedUsersData, setCheckedUsersData] = useState([]);

    useEffect(() => {
        fetch(uri)
            .then(response => response.json())
            .then((data) => {
                // console.log(data.data);
                setAvailableUsersData(data.data);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="">
            <h1 className="text-center pt-3 m-4 ">Gestione Utenti</h1>

            <div className="flexcontainer">
                <UsersList listName={"Utenti disponibili"} usersData={availableUsersData} />
                <UsersList listName={"Utenti controllati"} usersData={checkedUsersData} />
            </div>

        </div>
    );
}
