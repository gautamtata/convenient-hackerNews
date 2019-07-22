import React , { Component } from 'react';
import NavigationBar from './Components/Navbar/Navbar'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavigationBar />
        </Router>
      </div>
    )
  }
}

export default App;
