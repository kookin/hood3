import React from "react";	
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./login";
//import Home from "./front/home";
//import Product from "./front/product";
	
const App = () => {
	return (


	<Router>
      <Routes>
       
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>

	);
    };


export default App;
