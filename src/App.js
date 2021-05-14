import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import Detail from "./components/Detail"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
       <Header />
       <Switch>
         <Route path="/" exact><Home /></Route>
         <Route path="/detail"><Detail /></Route>
       </Switch>
       </Router>
    </div>
  );
}

export default App;
