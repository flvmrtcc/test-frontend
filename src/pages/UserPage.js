import UserProfile from "../components/UserProfile";

export default function UserPage() {
    const user = {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
    }
    return (
        <div className="">
            <h1 className="text-center pt-3 m-4">Pagina Utente</h1>

            <div className="d-flex flex-column w-100 align-items-center ">

                <UserProfile user={user} />

            </div>

        </div>
    );
}
