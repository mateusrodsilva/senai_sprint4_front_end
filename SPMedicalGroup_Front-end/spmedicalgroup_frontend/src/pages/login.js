import '../assets/css/style.css'
import Header from '../components/header'

function Login(){
        return(
            <div className="Login">
                <body>
                    <main>
                    <Header/>
                        <div className="banner">
                        <div className="content">
                                <div className="conteudo_login">
                                    <h1>Bem Vindo</h1>
                                    <form> 
                                    <h3 className="email">Email</h3>
                                    <input type="email" name="email" placeholder="Email"></input>
                                    <h3 className="senha">Senha</h3>
                                    <input type="password" name="senha" placeholder="Senha"></input>
                                    <button type="submit">Entrar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </body>
            </div>
        )
}

export default Login;