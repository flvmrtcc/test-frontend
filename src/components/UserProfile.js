
export default function UserProfile({ user }) {
    return (
        <div className="user-profile-container box-style border border-secondary rounded rounded-3 border-3">

            <div className="d-flex flex-row w-100 align-items-center justify-content-around">
                <img className="rounded rounded-3" src={user.avatar} alt={"Avatar di " + user.first_name + " " + user.last_name} />
                <div className="user-profile-data-user-container fs-5 ">
                    <div>ID: {user.id}</div>
                    <div>Nome: {user.first_name}</div>
                    <div>Cognome: {user.last_name}</div>
                    <div>Email: {user.email}</div>
                </div>
            </div>

        </div>
    );
}
