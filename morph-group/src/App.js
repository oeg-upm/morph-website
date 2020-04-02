import React from 'react';
import Route from 'react-router-dom/Route'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/agregar" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
