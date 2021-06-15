import '../assets/css/style.css'
import Header from '../components/header'
import { parseJwt} from '../services/auth';
import axios from 'axios';
import { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            erroMensagem : '',
            isLoading : false
        }
    };

    efetuaLogin = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem : '', isLoading : true });

        axios.post('http://localhost:5000/api/login', {
            email : this.state.email,
            senha : this.state.senha
        })

        // Verifica o retorno da requisição
        .then(resposta => {
            // Caso o status code seja 200,
            if (resposta.status === 200) {

                localStorage.setItem('tokenUsuario', resposta.data.token);
                console.log('Meu token é: ' + resposta.data.token);

                this.setState({ isLoading : false })

                switch (parseJwt().role) {
                    case '1':
                        this.props.history.push('/attconsultas');
                        break;

                    case '2':
                        this.props.history.push('/consultasmedico');
                        break;

                    case '3':
                        this.props.history.push('/consultaspacientes');
                        break;
                
                    default:
                        this.props.history.push('/');
                        break;
                }

            }
        })

        // Caso haja um erro,
        .catch(() => {
            // define o state erroMensagem com uma mensagem personalizada e que a requisição terminou
            this.setState({ erroMensagem : 'E-mail ou senha inválidos! Tente novamente.', isLoading : false });
        })
    }

    // Função genérica que atualiza o state de acordo com o input
    // pode ser reutilizada em vários inputs diferentes
    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    };
    
    render(){
        return(
            <div className="Login">
                <body>
                    <main>
                    <Header/>
                        <div className="banner">
                        <div className="content">
                                <div className="conteudo_login">
                                    <h1>Bem Vindo</h1>
                                    <form onSubmit={this.efetuaLogin}> 
                                        <h3 className="email">Email</h3>
                                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.atualizaStateCampo}/>
                                        <h3 className="senha">Senha</h3>
                                        <input type="password" name="senha" placeholder="Password" value={this.state.senha} onChange={this.atualizaStateCampo}/>
                                        <p style={{ color : 'red', textAlign : 'center' }}>{this.state.erroMensagem}</p>

                                        {
                                            this.state.isLoading === true &&
                                            <button type="submit" disabled>Loading...</button>
                                        }

                                        {
                                            this.state.isLoading === false &&
                                            <button type="submit" disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''}> Entrar</button>
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </body>
            </div>
        )
    }
}

export default Login;