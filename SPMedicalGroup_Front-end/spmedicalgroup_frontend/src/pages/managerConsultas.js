import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios';
import { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../assets/img/logo_spmedgroup_v1.png'



class ManagerConsultas extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaConsultas : []
        }
    }

    buscarConsultas = () => {
        // Faz a chamada para a API usando axios
        axios.get('http://localhost:5000/api/consulta', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('tokenUsuario')
            }
        })
        .then(resposta => {
            // Caso a requisição retorne um status code 200,
            if (resposta.status === 200) {
                this.setState({ listaConsultas : resposta.data })
                console.log(resposta)
            }
        })
        // Caso ocorra algum erro, mostra no console do navegador
        .catch(erro => console.log(erro))
    };


    excluirConsulta = (consulta) => {
        axios.delete('http://localhost:5000/api/consulta/' ,consulta.idConsulta,{
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('tokenUsuario')
            }
        })

        // Caso a requisição retorne um status code 204,
        .then(resposta => {
            if (resposta.status === 204) {
                // Exibe no console do navegador a mensagem 'Tipo de Evento x excluído!' onde x é o ID do Tipo de Evento excluído
                console.log('Consulta' + consulta.idConsulta + ' excluída!')
            };
        })

        // Caso ocorra alguma erro, exibe este erro no console do navegador
        .catch(erro => console.log(erro))

        // Então, atualiza a lista de Tipos de Eventos
        // sem o usuário precisar executar outra ação
        .then(this.buscarConsultas)
    }

        componentDidMount(){
            this.buscarConsultas();
        }

    render(){
        return(
            <div className="Consultas">
                <body>
                    <main>
                    <header className="topo">
                    <div className="content flex-center-bt">
                        <a href="#">
                            <img src={logo}></img>
                        </a>
                        <nav className="menu">
                                <ul>
                                    <li><Link to='/administrador'>Usuários</Link></li>
                                    <li><Link to='/consultasadm'>Consultas</Link></li>
                                    <li><a>Olá, Administrador</a></li>
                                </ul>                
                        </nav>
                    </div>
                </header>
                        <div className="fundo_consultas">
                            <div className="content flex-center-bt">
                                <section className="consultas">
                                    <h2>Consultas</h2>
                                    <div className="flex-center-bt">
                                        <div className="card_consulta">
                                            <table className="info_consultas">
                                                <thead>
                                                    <tr>
                                                        <th>Data: </th>
                                                        <th>Horário: </th>
                                                        {/* <th>Médico: </th> */}
                                                        {/* <th>Especialidade: </th> */}
                                                        {/* <th>Paciente: </th> */}
                                                        <th>Situação: </th>
                                                        <th>Descrição: </th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {
                                                        this.state.listaConsultas.map((consulta) => {
                                                                return(
                                                                    <tr key={consulta.IdConsulta}>
                                                                        <td>{new Date(consulta.dataConsulta).toLocaleDateString()}</td>
                                                                        <td>{new Date(consulta.dataConsulta).toLocaleTimeString()}</td>
                                                                        {/* <td>{consulta.idMedicoNavigation.nomeMedico}</td> */}
                                                                        {/* <td>{consulta.idMedicoNavigation.idEspecialidadeNavigation.nomeEspecialidade}</td> */}
                                                                        {/* <td>{consulta.idProntuarioNavigation.nomePaciente}</td> */}
                                                                        <td>{consulta.situacao}</td>
                                                                        <td>{consulta.descricao}</td>
                                                                        <td><button onClick={() => this.excluirConsulta(consulta)}>Excluir</button></td>
                                                                    </tr>
                                                                );
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </main>
                    <Footer/>
                </body>

            </div>
        )
    }
}

export default ManagerConsultas;