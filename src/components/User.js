import { Link } from "react-router-dom";
import ModalConfirmAddUser from "./ModalConfirmAddUser";

export default function User({ user }) {
    const userPageLink = "/" + user.id;
    
    return (
        <div className="user rounded rounded-3">
            <Link to={userPageLink} className="text-decoration-none">
                <div className="userListData">
                    <img className="avatar" src={user.avatar} alt={"Avatar di " + user.first_name + " " + user.last_name} />
                    <div className="userListCompleteName ">
                        {user.first_name + " " + user.last_name}
                    </div>
                </div>
            </Link>

            <ModalConfirmAddUser userID={user.id} userName={user.first_name + " " + user.last_name} />
        </div>
    )
}