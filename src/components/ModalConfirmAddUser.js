import { useEffect, useState } from "react";
import { useUsersCheckedContext } from "../UsersCheckedContext";


export default function ModalConfirmAddUser({ userID = "ID", userName = "NAME" }) {
    const modalID = "confirmModal" + userID;
    const [confirmed, setConfirmed] = useState(false);
    const [usersChecked, addUserToChecked] = useUsersCheckedContext();

    useEffect(() => {
        if (confirmed) {
            addUserToChecked(userID);
            setConfirmed(false);
        }
    }, [confirmed, addUserToChecked, userID]);

    return (
        <>
            <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target={"#" + modalID}>
                +
            </button>

            <div className="modal fade" id={modalID} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Aggiungi all'elenco utenti controllati</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Sicuro di voler aggiungere l'utente <b>{userName}</b> con id <b>{userID}</b> all'elenco degli utenti controllati?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => setConfirmed(true)}>Conferma</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
