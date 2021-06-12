import '../assets/css/style.css'

class Manager extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaUsuarios : []
        }
    }
    buscarUsuarios = () => {
        axios('http://localhost:5000/api/Usuario', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('tokenUsuario')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {

                    this.setState({listaUsuarios : resposta.data})
                }
            })
            .catch(erro => console.log(erro))
    }

    componentDidMount(){
        this.buscarUsuarios();
    }

    render(){
        return(
                <body>
                <main>
                <header className="topo">
                    <div className="content flex-center-bt">
                        <a href="#">
                            <img src={logo}></img>
                        </a>
                        <nav className="menu">
                                <ul>
                                    <li><a href="manager.js">Usuários</a></li>
                                    <li><a href="#">Consultas</a></li>
                                    <li><a href="#">Olá, Administrador</a></li>
                                </ul>                
                        </nav>
                    </div>
                </header>
                    <div className="fundo_cadastro">
                        <div className="content flex-center-bt column">
                            <section className="listagem_usuarios">
                                <h2>Lista de Usuários</h2>
                                <table>
                                    <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Tipo de usuário</th>
                                                    <th>Nome</th>
                                                </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.listaUsuarios.map((usuario)=> {
                                            return(
                                                <tr key={usuario.IdUsuario}>
                                                    <td>{usuario.IdUsuario}</td>
                                                    <td>{usuario.idTipoUsuarioNavigation.TituloTipoUsuario}</td>
                                                    <td>{usuario.NomeUsuario}</td>
                                                </tr>
                                                );

                                            })
                                        }
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </main>
                <Footer/>
            -</body>
        )
    }
}