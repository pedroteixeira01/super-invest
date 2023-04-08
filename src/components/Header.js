import "./header.css";
import logo from "../assets/new_logo.png";
import lupa from "../assets/lupa.png";
import React from "react";

export function Header(){
    return (
        <header className="mainColor">
            <div>
                <nav>
                    <ul>
                        <img
                            id="logo"
                            src={logo}
                            alt="logo sem direitos autorais"
                        />
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Usuários</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><img id="lupa" src={lupa} /></li>
                    </ul>
                </nav>
                <hr />
                <p>Lista de usuários</p>
            </div>
        </header>
    );
}