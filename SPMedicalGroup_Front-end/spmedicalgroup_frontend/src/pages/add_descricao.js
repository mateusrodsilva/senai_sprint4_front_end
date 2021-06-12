import '../assets/css/style.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React, { Component } from 'react';

class AttConsultas extends Component{
    constructor(props){
        super(props);
        this.state = {
            descricao : ''
        }
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