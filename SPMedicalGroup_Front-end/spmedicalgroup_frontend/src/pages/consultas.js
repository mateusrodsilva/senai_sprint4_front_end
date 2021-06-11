import '../assets/css/style.css'
import Header from '../components/header'
import Footer from '../components/footer'


export default function Consultas(){

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
                                    <div className="card_consulta">
                                        <table className="info_consultas">
                                            <tbody>
                                                <tr>
                                                    <th>Data :</th>
                                                    <th>Médico :</th>
                                                    <th>Especialidade :</th>
                                                    <th>Paciente :</th>
                                                    <th>Clinica :</th>
                                                    <th>+ Descrição</th>
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