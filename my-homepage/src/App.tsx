import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home/Home';
import About from './component/About/About';
import Portfolio from './component/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
