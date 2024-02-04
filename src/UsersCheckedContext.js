import { createContext, useContext, useState } from 'react';

const UsersCheckedContext = createContext({});

export function useUsersCheckedContext() {
    return useContext(UsersCheckedContext);
}

export function UsersCheckedProvider({ children }) {
    const [usersChecked, setUsersChecked] = useState([1, 3]);

    function addUserToChecked(userID) {
        setUsersChecked([userID, ...usersChecked]);
        console.log(usersChecked);
    }

    return (
        <UsersCheckedContext.Provider
            value={[usersChecked, addUserToChecked]}
        >
            {children}
        </UsersCheckedContext.Provider>
    );
}
