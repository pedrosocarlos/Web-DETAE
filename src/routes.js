import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Inicio from './pages/Inicio';
import Apresentacao from './pages/Apresentacao';
import Equipe from './pages/Equipe';
import Atuacao from './pages/Atuacao';
import Publicacoes from './pages/Publicacoes';
import Noticias from './pages/Noticias';
import Contatos from './pages/Contatos';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/apresentacao" component={Apresentacao} />
                <Route path="/equipe" component={Equipe} />
                <Route path="/atuacao" component={Atuacao} />
                <Route path="/publicacoes" component={Publicacoes} />
                <Route path="/noticias" component={Noticias} />
                <Route path="/contatos" component={Contatos} />

            </Switch>
        </BrowserRouter>


    );
}