import Home from './components/Home';
import PantsCards from './components/PantsCardS';
import ShirstCards from './components/ShirtsCards';
import ShoesCard from './components/ShoesCard';
import ShoppingCart from './components/ShoppingCart';
import "./index.css"
import Box from '@mui/material/Box';  
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
//////////////////////////////////////////////////////////////
  const [pantsData, setPantsData] = useState([])
  const [shirtsData, setShirtsData] = useState([])
  const [shoesData, setShoesData] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])

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

  // useEffect(() => {
  //   fetch(`http://localhost:9292/purchases`)
  //   .then( res => res.json())
  //   .then( data => console.log(data))
  //   .catch( error => console.log(error.message));
  // }, [])
/////////////////////////////////////////////////////
////////////////////////////////////////////////////

function addShoePost(key, id) {
   fetch(`http://localhost:9292/purchases`, {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json"
       },
       body: JSON.stringify({
           [key]: id
       })
   })
   .then( res => res.json())
   .then( data => setShoppingCart(data))
   .catch( error => console.log(error.message));
}  

/////////////////////////////////////////////////////

  return (
    <Box>
      <BrowserRouter> 
        <NavBar/>
          <Box>
            <ShoppingCart shoppingCart={shoppingCart} />
          </Box>
          <Routes>
            <Route path="/" element={<Navigate replace to="/Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Shirts" element={<ShirstCards pantsData={shirtsData}/>} />
            <Route path="Pants"element={<PantsCards pantsData={pantsData}/>} />
            <Route path="Shoes"element={<ShoesCard addShoePost={addShoePost} pantsData={shoesData}/>} />
          </Routes>
      </BrowserRouter>
    </Box>      
  );
}
export default App;