import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';


import './assets/css/style.css';

import App from '../src/pages/home/App';
import Login from './pages/login';
import AttConsultas from './pages/att_consultas'
import { parseJwt, usuarioAutenticado } from './services/auth';


import reportWebVitals from './reportWebVitals';
import CadUsuarios from './pages/cad_usuarios';
import ConsultasPaciente from './pages/consultaPaciente';
import ConsultasMedico from './pages/consultaMedico';
import Manager from './pages/manager';
import ManagerConsultas from './pages/managerConsultas';

// const PermissaoAdm = ({ component : Component  }) => (
//   <Route 
//     render = { props =>
//       // Verifica se o usuário está logado e se é Administrador
//       parseJwt().role === "1" ? 
//       // Se sim, renderiza de acordo com a rota solicitada e permitida
//       <Component {...props} /> : 
//       // Se não, redireciona para a página de login
//       <Redirect to = 'login' />
//     }
//   />
// );

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} /> {/* Home */}
        <Route path="/login" component={Login} /> {/* Login */}
        <Route path="/consultaspacientes" component={ConsultasPaciente}/>
        <Route path="/consultasmedico" component={ConsultasMedico}/>
        <Route path="/attconsultas" component={AttConsultas}/>
        <Route path="/administrador" component={Manager}/>
        <Route path="/consultasadm" component={ManagerConsultas}/>
        <Redirect to = "/notfound"/> {/* Redireciona para NotFound caso não encontre nenhuma rota */}
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
