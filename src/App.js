import './App.css';
import Alert from './components/Alert.js';
import About from './components/About.js';
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import React, {useState} from 'react';
// import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type 
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#112440';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  }

  return (
    <>
      {/* <div>lorem40</div> */}
      {/* <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert= {alert}/>
        <div className="container my-3">
          <Routes>
          <Route path="/" element={<About />} >
              <Route path="/about">
                <About />
              </Route>
              <Route path='/'>
                
              </Route>
          </Routes>
        </div>
      </Router> */}
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert= {alert}/>
        <div className="container my-3">
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />}>
        </Route>
        <Route path="/about" element={<About/>}/>

      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
