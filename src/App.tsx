import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import { User } from "./types/User";

function App() {
    const users: User[] = [
        { name: "Lincoln", age: 17 },
        { name: "Miguel", age: 18 },
    ];
    return (
        <div className="App">
            <h1>Lista de Usuários</h1>
            {users.map((user, index) => (
                <UserCard key={index} user={user} />
            ))}
        </div>
    );
}

export default App;
