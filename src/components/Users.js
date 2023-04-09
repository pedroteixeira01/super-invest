import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import "./users.css";

export const Users = () => {
    const [url, setUrl] = useState("https://fakerapi.it/api/v1/users?_quantity=21&_seed=1");
    const {data: users} = useFetch(url);

    return (
        <main className="mainContent">
            { users && users.data.map((user) => {
                return (
                <section className="card" key={user.id}>
                    <div className="userPhoto">
                        <img src={user.image} alt="Foto do usuário" />
                    </div>
                    <div className="userInfo">
                        <h3 className="name"> {`${user.firstname} ${user.lastname}`} </h3>
                        <p id="userName">
                            Usuário: <strong>{user.username}</strong>
                        </p>
                        <p id="userEmail">
                            E-mail: <strong>{user.email}</strong>
                        </p>
                        <br />
                        <a href={user.website} className="site">{user.website}</a>
                    </div>
                </section>);
            }) }
        </main>
    );
}