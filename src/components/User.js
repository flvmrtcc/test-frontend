export default function User({ user }) {
    return (
        <div className="user">
            <div>
                {user.id}
            </div>
            <img className="avatar" src={user.avatar} alt={"Avatar di " + user.first_name + " " + user.last_name} />
            <div className="rightUserProfile">
                <div>
                    {user.first_name + " " + user.last_name}
                </div>
                <div>
                    Email: {user.email}
                </div>
            </div>
        </div>
    )
}