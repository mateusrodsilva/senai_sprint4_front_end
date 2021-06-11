import '../assets/css/style.css'
import Header from '../components/header'
import Footer from '../components/footer'

export default function CadUsuarios(){
    return(
        <div className="CadUsuarios">
            <body>
                <main>
                    <Header/>

                    <div className="fundo_cadastro">
                        <div className="content flex-center-bt column">
                            <section className="cadastro">
                                <h2>Cadastro</h2>
                                <form action="#" className="input_cadastro wrap">
                                    <div className="input">
                                        <label for="">Tipo usuário</label>
                                        <select name="" id="">
                                            <option value="0">Paciente</option>
                                            <option value="1">Médico</option>
                                            <option value="2">Administrador</option>
                                        </select>
                                    </div>
                                    
                                    <div className="input">
                                        <label for="">Nome de usuário</label>
                                        <input type="text" placeholder="Nome de usuário"></input>

                                    </div>

                                    <div className="input">
                                        <label for="">Nome do Paciente</label>
                                        <input type="text" placeholder="Nome do paciente"></input>

                                    </div>

                                    <div className="input">
                                        <label for="">RG</label>
                                        <input type="text" placeholder="RG"></input>

                                    </div>
                                    
                                    <div className="input">
                                        <label for="">CPF</label>
                                        <input type="text" placeholder="CPF"></input>

                                    </div>
                                    
                                    <div className="input">
                                        <label for="">Endereço</label>
                                        <input type="text" placeholder="Endereço"></input>

                                    </div>
                                    
                                    <div className="input">
                                        <label for="">Data de Nascimento</label>
                                        <input type="date" placeholder="Data de Nascimento"></input>

                                    </div>
                                    
                                    <div className="input">
                                        <label for="">Telefone</label>
                                        <input type="tel" placeholder="Telefone"></input>

                                    </div>
                                    
                                    <div className="input">
                                        <label for="">Email</label>
                                        <input type="email" placeholder="Email"></input>

                                    </div>
                                    
                                    <div className="input">
                                        <label for="">Senha</label>
                                        <input type="password" placeholder="Senha"></input>
                                    </div>
                                    
                                        

                                    <button id="botao_cadastrar" type="submit">Cadastrar</button>

                                </form>

                            </section>
                            <section className="listagem_usuarios">
                                <h2>Lista de Usuários</h2>
                                <table>
                                    <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Tipo de usuário</th>
                                                    <th>Nome</th>
                                                    <th>Id Prontuario</th>
                                                </tr>
                                    </thead>
                                    {/* <tbody>
                                        {
                                            return(
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            )
                                        }
                                    </tbody> */}
                                </table>
                            </section>
                        </div>
                    </div>
                </main>
                <Footer/>
            -</body>
        </div>
    )
}