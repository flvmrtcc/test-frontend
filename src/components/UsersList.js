import User from "./User";

export default function UsersList({ listName = "Lista utenti", usersData = [] }) {
    // const user = {
    //     id: 1,
    //     email: "george.bluth@reqres.in",
    //     first_name: "George",
    //     last_name: "Bluth",
    //     avatar: "https://reqres.in/img/faces/1-image.jpg"
    // }

    return (
        <div className="users-list">
            <h2>{listName}</h2>
            {/* <h5>ID Nome Cognome Email</h5> */}

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