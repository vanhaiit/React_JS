import React, { Component } from 'react';
import Menu from './components/menu/Menu';
import routes from './routers';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/menu/Navbar';
import Footer from './components/footer/Footer';
import fixedPlugin from './components/footer/Fixed.plugin';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="wrapper">
            {/* header */}
            <Menu />

            <div className="main-panel">
              <Navbar />
              {/* Navbar */}
              {/* content */}
              <div className="content">
                <div className="container-fluid">

                  {this.showContentMenus(routes)}
                  {/* BODY */}

                </div>
              </div>
              <Footer />
              {/* footer */}
              <fixedPlugin />
              {/* Fixed.plugin */}
            </div>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route key={index} path={route.path} exact={route.exact} component={route.main} />)
      });
      return <Switch>{result}</Switch>
    }
  }
}

export default App;
