import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './lib/PrivateRoute';

import Main from './Components/Main/Main';
import Board from './Components/Board/Board';
import BoardCreate from './Components/Board/BoardCreate';
import BoardUpdate from './Components/Board/BoardUpdate';
import BoardDetail from './Components/Board/BoardDetail';
import Test from './Components/Test/Test';
import Ranking from './Components/Ranking/Ranking';
import Result from './Components/Result/Result';
import NotFound from './Components/NotFound/NotFound';
import Nav from "./Components/Navigation/Nav";

import { WebtoonApi } from './API/Webtoon/WebtoonApi';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  window.scrollTo(0, 0);
  WebtoonApi()

  return (
    <BrowserRouter>
      <Route component={Nav} />
      <Switch>
        <Route path="/" component={Main} exact={true} />
        <Route path="/board" component={Board} exact={true} />
        <Route path="/test" component={Test} exact={true} />
        <Route path="/ranking" component={Ranking} exact={true} />
        <Route path="/board/create" component={BoardCreate} exact={true} />
        <Route path="/board/:id" component={BoardDetail} exact={true} />
        <PrivateRoute path="/board/:id/update" component={BoardUpdate} exact={true} />
        <Route path="/board/result" component={BoardCreate} exact={true} />
        <Route path="/result/:id" component={Result} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
