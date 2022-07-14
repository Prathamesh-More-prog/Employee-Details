import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import {
  BrowserRouter,
  Route,
Routes,
  withRouter
} from "react-router-dom";
import NotFound from './components/pages/NotFound';
import AddUser from "./components/users/AddUser";



function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
    <Navbar/>
     
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/users/add" element={<AddUser/>} />
     <Route path="/*" element={<NotFound/>} />
    </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
