import '../assets/css/style.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { Component } from 'react'
import { parseJwt} from '../services/auth';


class CadUsuarios extends Component{
    constructor(props){
        super(props);
        this.state = {
            nomeUsuario : '',
            idTipoUsuario : 0,
            nomePaciente : '',
            nomeMedico: '',
            crm : '',
            rg : '',
            cpf : '',
            endereco : '',
            dataNascimento : new Date(),
            telefone : '',
            email : '',
            senha: '',
            listaTipoUsuarios: [],
            isLoading : false
        }
    }

    buscarTipoUsuario = () => {
        axios.get('http://localhost:5000/api/tipousuario', {
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

    cadastrarUsuario = (event) => {

        event.preventDefault()
        this.setState({isLoading : true});

        let usuario = {
            idTipoUsuario : this.state.idTipoUsuario,
            nomeUsuario : this.state.nomeUsuario,
            nomePaciente : this.state.nomePaciente,
            rg : this.state.rg,
            cpf : this.state.cpf,
            endereco : this.state.endereco,
            dataNascimento : this.state.dataNascimento,
            telefone : this.state.telefone,
            email : this.state.email,
            senha : this.state.senha
        };

        axios.post('http://localhost:5000/api/usuario' , usuario, {
            headers : {
                "Content-Type" : "application/json",
                'Authorization' : 'Bearer ' + localStorage.getItem('tokenUsuario')
            }
        })
        .then(resposta => {
            if (resposta.status === 201) {
                this.setState({ isLoading : false })
                alert("Usuario Cadastrado");
            }
        })
        .catch(erro => {
            console.log(erro);
            this.setState({ isLoading : false });
            alert("Por favor, preencha os campos obrigatórios");
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
    }
    

    render(){
        return(
            <div className="CadUsuarios">
                <body>
                    <main>
                        <Header/>

                        <div className="fundo_cadastro">
                            <div className="content flex-center-bt column">
                                <section className="cadastro">
                                    <h2>Cadastro</h2>
                                    <form action="#" onSubmit={this.cadastrarUsuario} className="input_cadastro wrap">
                                        <div className="input">
                                            <label for="">Tipo usuário</label>
                                            <select name="idTipoUsuario" value={this.props.idTipoUsuario} onChange={this.atualizaStateCampo} id="">
                                                <option value="0">Tipo de Usuario </option>
                                                {
                                                    this.state.listaTipoUsuarios.map(tipo => {
                                                        return(
                                                            <option key={tipo.idTipoUsuario} value={tipo.idTipoUsuario}>
                                                                {tipo.tituloTipoUsuario}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
    
                                        
                                        <div className="input">
                                            <label for="">Nome de usuário</label>
                                            <input type="text" onChange={this.atualizaStateCampo} name="nomeUsuario" placeholder="Nome de usuário"/>

                                        </div>

                                        <div className="input">
                                            <label for="">Nome do Paciente</label>
                                            <input type="text" name="nomePaciente" onChange={this.atualizaStateCampo} placeholder="Nome do paciente"></input>

                                        </div>

                                        <div className="input">
                                            <label for="">RG</label>
                                            <input type="text" name="rg" onChange={this.atualizaStateCampo} placeholder="RG"></input>

                                        </div>
                                        
                                        <div className="input">
                                            <label for="">CPF</label>
                                            <input type="text" name="cpf" onChange={this.atualizaStateCampo} placeholder="CPF"></input>

                                        </div>
                                        
                                        <div className="input">
                                            <label for="">Endereço</label>
                                            <input type="text" name="endereco" onChange={this.atualizaStateCampo} placeholder="Endereço"></input>

                                        </div>
                                        
                                        <div className="input">
                                            <label for="">Data de Nascimento</label>
                                            <input type="date" name="dataNascimento" onChange={this.atualizaStateCampo} placeholder="Data de Nascimento"></input>

                                        </div>
                                        
                                        <div className="input">
                                            <label for="">Telefone</label>
                                            <input type="tel" name="telefone" onChange={this.atualizaStateCampo} placeholder="Telefone"></input>

                                        </div>
                                        
                                        <div className="input">
                                            <label for="">Email</label>
                                            <input type="email" name="email" onChange={this.atualizaStateCampo} placeholder="Email"></input>

                                        </div>
                                        
                                        <div className="input">
                                            <label for="">Senha</label>
                                            <input type="password" name="senha" onChange={this.atualizaStateCampo} placeholder="Senha"></input>
                                        </div>
                                        
                                        <button id="botao_cadastrar" type="submit">Cadastrar</button>

                                    </form>

                                </section>
                                
                            </div>
                        </div>
                    </main>
                    <Footer/>
                -</body>
            </div>
        )
    }
}

export default CadUsuarios;