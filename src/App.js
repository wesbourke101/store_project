import Home from './components/Home';
import PantsCards from './components/PantsCards';
import ShirstCards from './components/ShirtsCards';
import ShoesCard from './components/ShoesCard';
import ShoppingCart from './components/ShoppingCart';
import ModalBox from './components/ModalBox';
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
import { Modal } from '@mui/material';


// to install json run this npm install :npm install -g json-server
// to run server: json-server --watch db.json --port 3001

function App() {
//////////////////////////////////////////////////////////////
  const [pantsData, setPantsData] = useState([])
  const [shirtsData, setShirtsData] = useState([])
  const [shoesData, setShoesData] = useState([])
  const [shoppingCartShoes, setShoppingCartShoes] = useState([])
  const [shoppingCartShirts, setShoppingCartShirts] = useState([])
  const [shoppingCartPants, setShoppingCartPants] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])
  const [cartObject, setCartObject] = useState([])

  console.log(shoppingCartShirts)

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

  useEffect(() => {
    fetch(`http://localhost:9292/purchases`)
    .then( res => res.json())
    .then( data => setCartObject(data))
    .catch( error => console.log(error.message));
  }, [shoppingCart])

  useEffect(() => {
    fetch(`http://localhost:9292/shoes-cart`)
    .then( res => res.json())
    .then( data => setShoppingCartShoes(data))
    .catch( error => console.log(error.message));
  }, [shoppingCart])


  useEffect(() => {
    fetch(`http://localhost:9292/shirts-cart`)
    .then( res => res.json())
    .then( data => setShoppingCartShirts(data))
    .catch( error => console.log(error.message));
  }, [shoppingCart])

  useEffect(() => {
    fetch(`http://localhost:9292/pants-cart`)
    .then( res => res.json())
    .then( data => setShoppingCartPants(data))
    .catch( error => console.log(error.message));
  }, [shoppingCart])

/////////////////////////////////////////////////////
////////////////////////////////////////////////////

function addShoePost(key, id) {
   fetch(`http://localhost:9292/shoe-purchases`, {
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

function addPantPost(key, id) {
  fetch(`http://localhost:9292/pant-purchases`, {
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

function addShirtPost(key, id) {
  fetch(`http://localhost:9292/shirt-purchases`, {
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
/////////////////////////////////////////////////////
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

function handleDeleteClick(e) {
  fetch(`http://localhost:9292/delete-purchases/${e.target.id}`, {
      method: "DELETE"
  })
  .then(res => res.json())
  .then(data => setShoppingCart(data))
  .catch( error => console.log(error.message));
}

function handleCheckOut() {
  handleClose()
  fetch(`http://localhost:9292/delete-all`, {
      method: "DELETE"
  })
  .then(res => res.json())
  .then(data => setShoppingCart(data))
  .catch( error => console.log(error.message));
}
////////////////////////////////////////////////////
  return (
    <Box>
      <BrowserRouter> 
        <NavBar/>
          <Box>
            <ShoppingCart open={open} handleClose={handleClose} handleOpen={handleOpen} setOpen={setOpen} handleCheckOut={handleCheckOut} cartObject={cartObject} handleDeleteClick={handleDeleteClick} shoppingCartPants={shoppingCartPants} shoppingCartShirts={shoppingCartShirts} shoppingCartShoes={shoppingCartShoes} />
          </Box>
          <Routes>
            <Route path="/" element={<Navigate replace to="/Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Shirts" element={<ShirstCards addShirtPost={addShirtPost} pantsData={shirtsData}/>} />
            <Route path="Pants"element={<PantsCards addPantPost={addPantPost} pantsData={pantsData}/>} />
            <Route path="Shoes"element={<ShoesCard addShoePost={addShoePost} pantsData={shoesData}/>} />
          </Routes>
      </BrowserRouter>
    </Box>      
  );
}
export default App;