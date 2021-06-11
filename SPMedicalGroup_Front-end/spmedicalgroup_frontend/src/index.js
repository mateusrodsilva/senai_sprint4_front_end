import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';


import './index.css';

import App from '../src/pages/home/App';
import Login from './pages/login';
import Consultas from './pages/consultas'
import AttConsultas from './pages/att_consultas'


import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} /> {/* Home */}
        <Route path="/login" component={Login} /> {/* Login */}
        <Route path="/consultas" component={Consultas}/>
        <Route path="/atuallizarconsulta" component={AttConsultas}/>
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
