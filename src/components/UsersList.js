import { useUsersCheckedContext } from "../UsersCheckedContext";
import User from "./User";

export default function UsersList({ listName = "Lista utenti", usersData = [] }) {
    const [usersChecked] = useUsersCheckedContext();

    function isUserChecked(user) {
        return usersChecked.some(item => user.id.toString() === item.toString());
    }


    return (
        <div className="users-list box-style border border-secondary rounded rounded-3 border-3">
            <h2>{listName}</h2>
            {
                usersData.length > 0 ?
                    usersData.map(user => {
                        if (!isUserChecked(user))
                            return <User key={user.id} user={user} showButtonAddUser={true} />
                        else
                            return <User key={user.id} user={user} />
                    })
                    :
                    <h4 className="text-secondary"><i>Nessun utente presente!</i></h4>
            }
        </div>
    )
}