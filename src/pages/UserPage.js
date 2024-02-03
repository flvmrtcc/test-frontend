import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import { UsersContext } from "../UsersContext";
import { useContext } from "react";

export default function UserPage() {
    const { userID } = useParams();
    const usersData = useContext(UsersContext);

    const user = usersData.find((user) => {
        return user.id.toString() === userID.toString();
    });

    return (
        <div>
            <h1 className="text-center pt-3 m-4">Pagina Utente</h1>

            <div className="d-flex flex-column w-100 align-items-center p-3">
                {user ?
                    <UserProfile user={user} />
                    :
                    <h4 className="text-secondary"><i>Nessun utente trovato con id {userID}!</i></h4>
                }
            </div>

        </div>
    );
}
