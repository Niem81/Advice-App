import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Register from '../components/Register';
import Login from '../components/Login';
import AdviceList from '../components/AdviceList';

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route path="/advices" component={AdviceList}/>
    </Switch>
  </div>
)

export default Main;
