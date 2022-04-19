import Home from './components/Home';
import PantsCards from './components/PantsCardS';
import ShirstCards from './components/ShirtsCards';
import "./index.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';
  import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import NavBar from './components/NavBar';


// to install json run this npm install :npm install -g json-server
// to run server: json-server --watch db.json --port 3001

function App() {

  const [pantsData, setPantsData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/pants`)
    .then( res => res.json())
    .then( data => setPantsData(data))
    .catch( error => console.log(error.message));
  }, [])


  return (
    <Box>
      <BrowserRouter> 
        <NavBar />
        {/* this will be where the checkout is. */}
          <Box>
            <Grid container spaceing={1}>
              <Grid item xs={12}>
                <Paper sx={{ background: "rgba(0,0,0,0.5)", height: '5rem'}}>
                </Paper>
              </Grid>  
            </Grid>
          </Box>
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Shirts" element={<ShirstCards pantsData={pantsData}/>} />
            <Route path="Pants"element={<PantsCards pantsData={pantsData}/>} />
          </Routes>
      </BrowserRouter>
    </Box>      
  );
}
export default App;