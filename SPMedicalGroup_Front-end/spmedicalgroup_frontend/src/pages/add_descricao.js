import '../assets/css/style.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React, { Component } from 'react';

class AttConsultas extends Component{
    constructor(props){
        super(props);
        this.state = {
            descricao : '',
            isLoading : false,
            idConsulta : 0
        }
    }

    cadastrardescricao = (event) => {

        event.preventDefault()
        this.setState({isLoading : true})

        let descricao = {
            descricao : this.state.descricao
        }

        axios.patch('http://localhost:5000/attdescricao' + descricao, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('tokenUsuario')
            }
        })
        .then(resposta => {
            if (resposta.status === 201) {
                this.setState({ isLoading : false })
            }
        })
        .catch(erro => {
            console.log(erro);
            this.setState({ isLoading : false });
        })
    }



    render(){
        return(
            <div className="AttConsultas">
                <body>
                    <main>
                        <Header/>
                        <div className="fundo_formulario_consulta">
                            <div className="content">
                                <section className="editar_consulta">
                                    <h2>Consulta </h2>

                                    <form action="#" className="forms_consulta">
                                    <div className="input">
                                                <label for=""></label>
                                                <select name="idProntuario" value={idProntuario}
                                                onChange={(event) => this.setState({idProntuario : event.target.value  })}>
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
                                        <div className="campo_descricao">
                                            <label for="">Descrição</label>
                                            <textarea id="" name="story"rows="30" cols="50" placeholder="Adicione uma descrição a esta consulta"></textarea>
                                            <button type="submit">Adicionar Descrição</button>
                                        </div>
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