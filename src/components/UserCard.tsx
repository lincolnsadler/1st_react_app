import React from "react";
import { User } from "../types/User";

interface Props {
    user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
    return (
        <div
            style={{ border: "1px solid gray", padding: "8px", margin: "8px" }}
        >
            <h2>{user.name}</h2>
            <p>Idade: {user.age}</p>
        </div>
    );
};

export default UserCard;
