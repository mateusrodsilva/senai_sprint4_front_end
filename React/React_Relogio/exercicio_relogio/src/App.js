import React from 'react';
import './App.css';

function DataFormatada(props){
  return <h2>{props.date.toLocaleTimeString()}</h2>
}     

// Define a class Clock que será chamada na renderização dentro do app
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date : new Date() // Define o estado date pegando a data atual
    };
  }

  // Ciclo de vida que ocorre quando Clock é inserida na DOM
  // Através da setInterval, o relógio é criado (com um timerID atrelado)
  // Chama a função thick() a cada 1000ms (1s)
  componentDidMount(){
    this.timerID = setInterval( () => {
      this.thick()
    },1000 );

    // Exibe no console o ID de cada relógio
    console.log("Eu sou o relógio " + this.timerID)    
  }

  // Ciclo de vida que ocorre quando o componente é removido da DOM
  // Quando isso ocorre , a função clearInterval limpa o relógio criado pelo setInterval
  componentWillUnmount(){
    clearInterval(this.timerID);    
  }

  // Define no state date a data atual a cada vez que é chamada
  thick(){
    this.setState({
      date : new Date()
    });
  }
  
  // Parar o Relogio
  stop(){
    clearInterval(this.timerID);
    console.log(this.timerID +  "PAUSADO!")
  }

  // Função para chamar a hora atual
  start(){    
    this.timerID = setInterval( () => {
      this.thick()
    },1000);
    console.log("Relógio retomado !")
    console.log("Agora sou o relógio " + this.timerID)
  }
  

  // Renderiza na tela o titulo e a função DataFormatada com o valor atual do state
  render(){
    return (
      <div className="Relogios"> 
        <img className="Relogio" src="clock-watch-time-timer-stopwatch-wallclock-management-22341.png"></img>
        <DataFormatada date={this.state.date}/>
        <button className="stop_button" onClick={() => this.stop()}>Parar</button>
        <button className="start_button" onClick={() => this.start()}>Retomar</button>
      </div>
    )
  }
}

// Função principal invocada no index.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Faz a chamada de dois relogios para mostrar a independência destes*/}
        <Clock/>
        <Clock/>
      </header>
    </div>
  );
}

// Declara que a funcao app pode ser usado fora do escopo
export default App;