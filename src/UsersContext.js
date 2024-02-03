import { createContext, useContext, useEffect, useState } from 'react';

const UsersContext = createContext({});

export function useUsersContext(){
    return useContext(UsersContext);
}

export function UsersProvider({ children }) {
    const uri = "https://reqres.in/api/users";
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        fetch(uri)
            .then(response => response.json())
            .then((data) => {
                // console.log(data.data);
                setUsersData(data.data);
            })
            .catch(console.error);
    }, []);

    return (
        <UsersContext.Provider value={usersData}>
            {children}
        </UsersContext.Provider>
    );
}
