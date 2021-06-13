import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios';
import { Component } from 'react';
import logo from '../assets/img/logo_spmedgroup_v1.png'

class Manager extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaUsuarios : []
        }
    }
    buscarUsuarios = () => {
        axios('http://localhost:5000/api/Usuario', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {

                    this.setState({listaUsuarios : resposta.data})
                }
            })
            .catch(erro => console.log(erro))
    }

    componentDidMount(){
        this.buscarUsuarios();
    }

    render(){
        return(
                <body>
                <main>
                <header className="topo">
                    <div className="content flex-center-bt">
                        <a href="#">
                            <img src={logo}></img>
                        </a>
                        <nav className="menu">
                                <ul>
                                    <li><a href="manager.js">Usuários</a></li>
                                    <li><a href="manangerConsultas.js">Consultas</a></li>
                                    <li><a href="#">Olá, Administrador</a></li>
                                </ul>                
                        </nav>
                    </div>
                </header>
                    <div className="fundo_cadastro">
                        <div className="content flex-center-bt column">
                            <section className="listagem_usuarios">
                                <h2>Lista de Usuários</h2>
                                <table>
                                    <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Tipo de usuário</th>
                                                    <th>Nome</th>
                                                </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.listaUsuarios.map((usuario)=> {
                                            return(
                                                <tr key={usuario.idUsuario}>
                                                    <td>{usuario.idUsuario}</td>
                                                    <td>{usuario.idTipoUsuario}</td>
                                                    <td>{usuario.nomeUsuario}</td>
                                                </tr>
                                                );

                                            })
                                        }
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </main>
                <Footer/>
            -</body>
        )
    }
}

export default Manager;