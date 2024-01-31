import User from "./User";

export default function UsersList({ listName = "Lista utenti", usersData = [] }) {
    return (
        <div className="users-list">
            <h2>{listName}</h2>
            {
                usersData.length > 0 ?
                    usersData.map(user => (
                        <User key={user.id} user={user} />
                    ))
                    :
                    <h4>Nessun utente presente!</h4>
            }
        </div>
    )
}