import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
// import des components
import Menu from "./components/Menu";
import Concert from "./components/Concert";
// Classe App
function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Route path="/" exact component={Concert} />
      </Router>
    </div>
  );
}

export default App;
