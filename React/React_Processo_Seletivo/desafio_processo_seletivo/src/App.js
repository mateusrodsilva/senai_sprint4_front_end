import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import {render} from 'react-dom'

class InfoUserApp extends Component{
  constructor(props){
      super(props);
      this.state = {
        user : '',
        repos: [],
        name: ''
      }
  }
}

buscarUser = (event) => {
  console.log('chamando API')

  event.preventDefault();

  fetch('https://api.github.com/users/' + this.state.user +'/repos?sort=created&per_page=1')

  .then(resposta => resposta.json())

  .then(data => this.setState({ repos : data }))

  .catch( erro => console.log(erro) )
}

atualizaNomeUser = async (evento) => {
await this.setState({ nome : evento.target.value })
console.log(this.state.user)
};


render(){
  return(
    <div>
      <main>
        <section>
          <h2>Info User</h2>
          <form>
            <input
            type = 'text'
            value= {this.state.user}
            placeholder = "Insira um nome de usuário cadastrado no GitHub"
            />
            <button type = 'submit'>Pesquisar</button>
          </form>
          <section>
            <h2>Dados de {this.state.name}</h2>
            <table>
              <tbody>
                {
                  this.state.repos.map((evento) => {
                    return(
                      <tr key = {evento.id}>
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

export default InfoUserApp;
