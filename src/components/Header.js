import "./header.css";
import logo from "../assets/new_logo.png";
import lupa from "../assets/lupa.png";

import { useState } from "react";

export function Header(){
    const [style, setStyle] = useState("out");

    const expand = () => {
        setStyle("in");
    }

    const compress = () => {
        setStyle("out");
    }

    return (
        <header className="mainColor">
            <div className="content">
                <nav id="headerOptions">
                    <ul>
                        <img
                            id="logo"
                            src={logo}
                            alt="logo sem direitos autorais"
                        />
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Usuários</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><input type="text" placeholder="Pesquisar" className={style} onBlur={compress} /></li>
                        <li onClick={expand}><img id="lupa" src={lupa} /></li>
                    </ul>
                </nav>
                <hr />
                <p>Lista de usuários</p>
            </div>
        </header>
    );
}