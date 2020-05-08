import React from 'react';
import Route from 'react-router-dom/Route'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'antd/dist/antd.css'; 

import Member from './pages/Member';
import Article from './pages/Article'
import Articles from './pages/Articles';
import Tools from './pages/Tools';
import Tool from './pages/Tool';

//Enabling Tooltips:
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/member/:member" component={Member}/>
            <Route path="/article/:code" component={Article}/>
            <Route exact path="/articles" component={Articles}/>
            <Route path="/tool/:code" component={Tool}/>
            <Route exact path="/tools" component={Tools}/>
        </BrowserRouter>
    );
  }
}

export default App;
