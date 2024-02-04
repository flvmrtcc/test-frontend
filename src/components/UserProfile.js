
export default function UserProfile({ user }) {
    return (
        <div className="d-flex flex-row w-100 align-items-center justify-content-center gap-5 mt-4 flex-wrap ">
            <img className="rounded rounded-3 shadow-sm " style={{ height: "200px", width: "200px" }} src={user.avatar} alt={"Avatar di " + user.first_name + " " + user.last_name} />
            <div className="user-profile-data-user-container fs-5 ">
                <div>ID: <b>{user.id}</b></div>
                <div>Nome: <b>{user.first_name}</b></div>
                <div>Cognome: <b>{user.last_name}</b></div>
                <div>Email: <b>{user.email}</b></div>
            </div>
        </div>
    );
}
