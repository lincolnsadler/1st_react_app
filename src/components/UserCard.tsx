import React from "react";
import { User } from "../types/User";
import style from "../styles/UserCard.module.css";

interface Props {
    user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
    return (
        <div className={style.UserCardContainer}>
            <div className={style.UserList}>
                <h2>{user.name}</h2>
                <p>Idade: {user.age}</p>
            </div>
        </div>
    );
};

export default UserCard;
