import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
      <Route path="/detail" element={ <Detail />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/home" element={ <Home />} />
          
      </Routes>
      </Router>
      
      <Home/>
    </div>
  );
}

export default App;
