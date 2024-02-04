import UsersList from "../components/UsersList";
import { useUsersContext } from "../UsersContext";
import { useUsersCheckedContext } from "../UsersCheckedContext";

export default function Home() {
    const usersData = useUsersContext();
    const [usersChecked] = useUsersCheckedContext();
    const usersCheckedData = [];


    function isUserChecked(user) {
        return usersChecked.some(item => user.id.toString() === item.toString());
    }

    usersData.map((user) => {
        if (isUserChecked(user)) {
            usersCheckedData.push(user);
        }
        return null;
    })


    return (
        <div className="">
            <h1 className="text-center pt-3 m-4 ">Gestione Utenti</h1>

            <div className="flexcontainer">
                <UsersList listName={"Utenti disponibili"} usersData={usersData} />
                <UsersList listName={"Utenti controllati"} usersData={usersCheckedData} />
            </div>

        </div>
    );
}
