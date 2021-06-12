import '../assets/css/style.css'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios';
import { Component } from 'react';


class Consultas extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaConsultas = [],
        }
    }

    buscarConsultas = () => {
        // Faz a chamada para a API usando axios
        axios('http://localhost:5000/api/consultas/minhasconsultas', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('tokenUsuario')
            }
        })
        .then(resposta => {
            // Caso a requisição retorne um status code 200,
            if (resposta.status === 200) {
                this.setState({ listaConsultas : resposta.data })
            }
        })
        // Caso ocorra algum erro, mostra no console do navegador
        .catch(erro => console.log(erro))
    };

    componentDidMount(){
        this.buscarConsultas();
    }

    render(){
        return(
            <div className="Consultas">
                <body>
                    <main>
                        <Header/>
                        <div className="fundo_consultas">
                            <div className="content flex-center-bt">
                                <section className="consultas">
                                    <h2>Consultas</h2>
                                    <div className="flex-center-bt">
                                        <div className="card_consulta">
                                            <table className="info_consultas">
                                                <tbody>
                                                    <tr>
                                                        <th>Data :</th>
                                                        <th>Médico :</th>
                                                        <th>Especialidade :</th>
                                                        <th>Paciente :</th>
                                                        <th>Clinica :</th>
                                                    </tr>
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

export default Consultas;