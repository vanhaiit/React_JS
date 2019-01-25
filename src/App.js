import React, { Component } from 'react';
import Menu from './components/menu/Menu';
import routes from './routers';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/menu/Navbar';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover />
          <div className="wrapper">
            {/* header */}
            <Menu />

            <div className="main-panel">
              <Navbar />
              {/* Navbar */}
              {/* content */}
              <div className="content">
                <div className="container-fluid">
                  <Switch>{this.showContentMenus(routes)}</Switch>
                  {/* BODY */}
                </div>
              </div>
              <Footer />
              {/* footer */}
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
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
      });
      return result;
    }
  }
}

export default App;
