import React from 'react';

interface IUser {
    name: string;
    email?: string;
}

interface Props {
    user: IUser;
}

//Functional Components: Inherits specific React properties, allowing children to be used and I can include the interface I created
const User: React.FC<Props> = ({ user, children }) => {
    return (
        <div>
            <strong>Nome: </strong> {user.name}
            <br />
            <strong>E-mail: </strong> {user.email || 'No email'}
            <br />
            <br />
        </div>
    );
}

export default User;