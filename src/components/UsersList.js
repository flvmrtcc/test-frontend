import User from "./User";

export default function UsersList({ listName = "Lista utenti", usersData = [] }) {
    return (
        <div className="users-list border border-secondary rounded rounded-3 border-3">
            <h2>{listName}</h2>
            {
                usersData.length > 0 ?
                    usersData.map(user => (
                        <User key={user.id} user={user} />
                    ))
                    :
                    <h4 className="text-secondary"><i>Nessun utente presente!</i></h4>
            }
        </div>
    )
}