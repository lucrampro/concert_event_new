import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import des components
import Menu from "./components/Menu";
// Classe App
function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Route path="/">
            <App />
        </Route>
      </Router>
    </div>
  );
}

export default App;
