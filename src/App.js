import Home from './components/Home';
import PantsCards from './components/PantsCardS';
import ShirstCards from './components/ShirtsCards';
import ShoesCard from './components/ShoesCard';
import "./index.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';
  import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import NavBar from './components/NavBar';


// to install json run this npm install :npm install -g json-server
// to run server: json-server --watch db.json --port 3001

function App() {

  const [pantsData, setPantsData] = useState([])
  const [shirtsData, setShirtsData] = useState([])
  const [shoesData, setShoesData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/pants`)
    .then( res => res.json())
    .then( data => setPantsData(data))
    .catch( error => console.log(error.message));
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/shirts`)
    .then( res => res.json())
    .then( data => setShirtsData(data))
    .catch( error => console.log(error.message));
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/shoes`)
    .then( res => res.json())
    .then( data => setShoesData(data))
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
            <Route path="/" element={<Navigate replace to="/Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Shirts" element={<ShirstCards pantsData={shirtsData}/>} />
            <Route path="Pants"element={<PantsCards pantsData={pantsData}/>} />
            <Route path="Shoes"element={<ShoesCard pantsData={shoesData}/>} />
          </Routes>
      </BrowserRouter>
    </Box>      
  );
}
export default App;