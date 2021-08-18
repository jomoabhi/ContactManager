import React, { Component } from 'react';
import { Provider } from './context';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './Components/contact/Contacts';
import Header from './Components/layout/Header';
import AddContact from './Components/contact/AddContact';
import About from './Components/pages/About';
import PageNotFound from './Components/pages/PageNotFound';
import EditContact from './Components/contact/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/AddContact" component={AddContact} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact/Edit/:id" component={EditContact} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
