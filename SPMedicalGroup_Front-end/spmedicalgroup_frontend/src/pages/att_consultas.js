import '../assets/css/style.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/img/logo_spmedgroup_v1.png'

class AttConsultas extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaPacientes : [],
            listaMedicos : [],
            idProntuario : 0,
            idMedico : 0,
            dataConsulta : new Date(),
            situacao : '',
            descricao : '',
            isLoading : false        
        }
    }

    buscarMedicos = () => {
        axios.get('http://localhost:5000/api/medico', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('tokenUsuario')
            }
        })
        .then(resposta => {
            // Caso a requisição retorne um status code 200,
            if (resposta.status === 200) {
                this.setState({ listaMedicos : resposta.data })
            }
        })
        .catch(erro => console.log(erro))
    }

    buscarPacientes = () => {
        axios.get('http://localhost:5000/api/Prontuario', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('tokenUsuario')
            }
        })
        .then(resposta => {
            // Caso a requisição retorne um status code 200,
            if (resposta.status === 200) {
                this.setState({ listaPacientes : resposta.data })
            }
        })
        .catch(erro => console.log(erro))
    }

    cadastrarConsulta = (event) => {

        event.preventDefault()
        this.setState({isLoading : true});

        let consulta = {
            idProntuario : this.state.idProntuario,
            idMedico : this.state.idMedico,
            dataConsulta : this.state.dataConsulta,
            situacao : this.state.situacao,
            descricao : this.state.descricao
        };

        axios.post('http://localhost:5000/api/consulta' , consulta, {

            body : JSON.stringify({
                idProntuario : this.state.idProntuario,
                idMedico : this.state.idMedico,
                dataConsulta : this.state.dataConsulta,
                situacao : this.state.situacao,
                descricao : this.state.descricao
            }),

            headers : {
                "Content-Type" : "application/json",
                'Authorization' : 'Bearer ' + localStorage.getItem('tokenUsuario')
            }
        })
        .then(resposta => {
            if (resposta.status === 201) {
                this.setState({ isLoading : false })
                alert("Consulta Cadastrada");
            }
        })
        .catch(erro => {
            console.log(erro);
            this.setState({ isLoading : false });
            alert("DUMBASS");
        })
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    };

    limparCampos = () => {
        this.setState({
            idProntuario : 0,
            idMedico : 0,
            dataConsulta : new Date(),
            situacao : 'Selecione',
            descricao : ''
        })
        // Exibe no console do navegador a mensagem 'Os states foram resetados!'
    }

    componentDidMount(){
        this.buscarMedicos();
        this.buscarPacientes();
    }

    render(){
        return(
            <div className="AttConsultas">
                <body>
                    <main>
                    <header className="topo">
                    <div className="content flex-center-bt">
                        <a href="#">
                            <img src={logo}></img>
                        </a>
                        <nav className="menu">
                                <ul>
                                    <li><Link to='/administrador' >Usuários</Link></li>
                                    <li><Link to='/consultasadm' >Consultas</Link></li>
                                    <li><a href="#">Olá, Administrador</a></li>
                                </ul>                
                        </nav>
                    </div>
                </header>
                        <div className="fundo_formulario_consulta">
                            <div className="content">
                                <section className="editar_consulta">
                                    <h2>Consulta </h2>

                                    <form onSubmit={this.cadastrarConsulta} className="forms_consulta">
                                        <div className="coluna_forms">

                                            <div className="input">
                                                <label for="">Nome Paciente</label>
                                                <select name="idProntuario" value={this.state.idProntuario}
                                                onChange={this.atualizaStateCampo}>
                                                <option value="0">Paciente</option>
                                                {
                                                    this.state.listaPacientes.map(paciente => {
                                                        return (
                                                            <option key={paciente.idProntuario} value={paciente.idProntuario}>
                                                                {paciente.nomePaciente}
                                                            </option>
                                                        )
                                                    })
                                                }

                                            </select>
                                            </div>
                                            <div className="input">
                                                <label for="">Nome Médico</label>
                                                <select name="idMedico" value={this.state.idMedico}
                                                onChange={this.atualizaStateCampo}>
                                                <option value="0">Médico</option>
                                                {
                                                    this.state.listaMedicos.map(medico => {
                                                        return (
                                                            <option key={medico.idMedico} value={medico.idMedico}>
                                                                {medico.nomeMedico}
                                                            </option>
                                                        )
                                                    })
                                                }

                                            </select>
                                            </div>
                                            <div className="input">
                                                <label for="">Data</label>
                                                <input name="dataConsulta" type="date" placeholder="Data"onChange={this.atualizaStateCampo}></input>
                                            </div>
                                            <div className="input">
                                                <label for="">Situação</label>
                                                <select name="situacao" onChange={this.atualizaStateCampo}>
                                                    <option value='0' >Selecione</option>
                                                    <option value='1'>Agendada</option>
                                                    <option value='2'>Cancelada</option>
                                                    <option value='3'>Realizada</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="campo_descricao">
                                            <label for="">Descrição</label>
                                            <textarea name="descricao"rows="30" cols="50" onChange={this.atualizaStateCampo} placeholder="Adicione uma descrição a esta consulta"></textarea>
                                            
                                        </div>
                                            <button type="submit">Cadastrar</button>
                                    </form>
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

export default AttConsultas;