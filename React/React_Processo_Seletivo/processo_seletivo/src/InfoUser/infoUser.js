import {Component} from 'react';


class InfoUser extends Component{
  constructor(props){
      super(props);
      this.state = {
        user : '',
        repos: [],
      }
  }
  atualizaNomeUser = async (evento) => {
  await this.setState({ nome : evento.target.value })
  console.log(this.state.user)
  };

  buscarUser = (event) => {
    console.log('chamando API')
  
    event.preventDefault();
  
    fetch('https://api.github.com/users/' + this.state.user +'/repos?sort=created&per_page=10')
  
    .then(resposta => resposta.json())
  
    .then(data => this.setState({ repos : data }))
  
    .catch( (erro) => console.log(erro) )
  }
  
  
  
    render(){
        return(
            <div>
                <main>
                <section>
                    <h2>Info User</h2>
                    <form onSubmit={this.buscarUser}>
                        <input
                        type ='text'
                        value= {this.state.user}
                        onChange= { u => this.setState({user: u.target.value})}
                        placeholder = "GitHub Username"
                        />
                        <button type = 'submit'>Pesquisar</button>
                    </form>
                    <section>
                    <h2>Dados</h2>
                    <table>
                    <thead>
                                <tr>
                                    <th>#</th>{/* IDs */}
                                    <th>Nome</th>{/* Títulos */}
                                    <th>Descrição</th>{/* Ações */}
                                    <th>Criado em</th>{/* Ações */}
                                    <th>Tamanho</th>{/* Ações */}
                                </tr>
                            </thead>
                        <tbody>
                        {
                            this.state.repos.map((evento) => {
                            return(
                                <tr key = {evento.id}>
                                <td>{evento.id}</td>
                                <td>{evento.name}</td>
                                <td>{evento.description}</td>
                                <td>{evento.created_at}</td>
                                <td>{evento.size}</td>
                                </tr>
                            )
                            })
                        }
                        </tbody>
                    </table>
                    </section>
                </section>
                </main>
            </div>
        );
    }
}



export default InfoUser;