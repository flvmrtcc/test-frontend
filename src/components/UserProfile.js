
export default function UserProfile({ user }) {
    return (
        <div className="d-flex flex-row w-100 align-items-center justify-content-around flex-wrap ">
            <img className="rounded rounded-3" style={{ height: "200px", width: "200px" }} src={user.avatar} alt={"Avatar di " + user.first_name + " " + user.last_name} />
            <div className="user-profile-data-user-container fs-5 ">
                <div>ID: {user.id}</div>
                <div>Nome: {user.first_name}</div>
                <div>Cognome: {user.last_name}</div>
                <div>Email: {user.email}</div>
            </div>
        </div>
    );
}
