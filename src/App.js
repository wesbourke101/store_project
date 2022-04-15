import Home from './components/Home';
import PantsCards from './components/PantsCardS';
import ShirstCards from './components/ShirtsCards';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

// to install json run this npm install :npm install -g json-server
// to run server: json-server --watch db.json --port 3001

function App() {


  return (
    <Box>
      <BrowserRouter> 
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
          <Link to='/'>Home</Link> |{" "}
          <Link to="/Shirts">Shirts</Link> |{" "}
          <Link to="/Pants">Pants</Link>
        </nav>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Shirts" element={<ShirstCards />} />
          <Route path="Pants"element={<PantsCards />} />
        </Routes>
      </BrowserRouter>
    </Box>      
  );
}
export default App;