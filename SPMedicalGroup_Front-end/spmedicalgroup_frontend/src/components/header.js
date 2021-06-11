import React from 'react';
import logo from '../assets/img/logo_spmedgroup_v1.png'

export default function Header(){
        return( 
            <div className="header">
                <header className="topo">
                    <div className="content flex-center-bt">
                        <a href="#">
                            <img src={logo}></img>
                        </a>
                        <nav className="menu">
                                <ul>
                                    <li><a href="home.html">Home</a></li>
                                    <li><a href="#">Consultas</a></li>
                                    <li><a href="#">Sobre</a></li>
                                    <li><a className="login_button" href="#">Login</a></li>
                                </ul>                        
                        </nav>
                    </div>

                </header>
            </div>
        ) 
}