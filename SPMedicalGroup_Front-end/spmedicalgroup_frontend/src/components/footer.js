import React from 'react';
import logo from '../assets/img/logo_spmedgroup_v1.png'
import DownloadAppStore from '../assets/img/img/NicePng_itunes-logo-png_179971.png'
import DownloadPlayStore from '../assets/img/img/get-it-on-google-play-badge.png'

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="rodape">
                    <div className="content flex-center-bt">
                        <div className="conteudo-rodape">
                            <nav className="links-uteis">
                                <h2>Links Úteis</h2>
                                <ul>
                                    <li><a>Home</a></li>
                                    <li><a>Consultas</a></li>
                                    <li><a>Sobre</a></li>
                                    <li><a>Login</a></li>
                                </ul>
                            </nav>
                            <img id="logo_rodape" src={logo} alt="Logo SP Medical Group"></img>
                            <div className="link_Download">
                                <h2>Baixe nosso App!</h2>
                                <a><img src={DownloadAppStore} alt="Link para baixar o Aplicativo na App Store"></img></a>
                                <a><img src={DownloadPlayStore} alt="Link para baixar o Aplicativo na Play Store"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}