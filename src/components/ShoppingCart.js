import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import "../index.css"



function ShoppingCart({cartObject, shoppingCartShoes, shoppingCartShirts, shoppingCartPants, handleDeleteClick}) {

  function runTotals() {  
    let shoes = shoppingCartShoes.reduce((a, b) => a + b.price, 0)
    let shirts = shoppingCartShirts.reduce((a, b) => a + b.price, 0)
    let pants =shoppingCartPants.reduce((a, b) => a+ b.price, 0)
    return shoes + shirts + pants
  }
  function whenButtonClicked(e) {
    
    console.log('clicked')
  }

  let pantsCount=0
  let shoesCount=0
  let shirtsCount=0
  function totalItemsInCart() {
    pantsCount = shoppingCartPants.length;
    shoesCount = shoppingCartShoes.length;
    shirtsCount = shoppingCartShirts.length;
    return pantsCount + shoesCount + shirtsCount
  }

  let totalItems = totalItemsInCart()
  let total = runTotals()
  const shirtMap = cartObject.map(purchase => {
    // console.log(purchase.name)
    return <div ><h4>{purchase.shoe?.name || purchase.shirt?.name || purchase.pant?.name}</h4><h5>{purchase.shoe?.description || purchase.shirt?.description || purchase.pant?.description}</h5><button id={purchase.id} onClick={handleDeleteClick}>[x]</button> </div>
  })
  return (

    <Grid id="gridStuff"container sx={{p: '1rem'}}>
        <Grid item xs={3} sx={{px: .5, py: .5}}>
          <Paper sx={{ background: "rgba(0,0,0,0.5)", height: '10rem'}}>
            <h2 id="shoppingCartCheckOut">Shopping Cart</h2>
            <br/>
            <h7 id="cartOne" >Total # Shirts: {shirtsCount}</h7>
            <br/>
            <h7 id="cartOne" >Total # Pants: {pantsCount}</h7>
            <br/>
            <h7 id="cartOne" >Total # Shoes: {shoesCount}</h7>
            <br/>
            <h7 id="cartOne" >Total Items: {totalItems}</h7>
            <br/>
            <h7 id="cartOne" >Total $: {total}.00</h7>
            <br/>
            <Button onClick={(e) => whenButtonClicked(e)} variant="contained" sx={{bgcolor: "#ACB992"}}>Hey </Button>
          </Paper>
        </Grid>  
        <Grid item xs={9} sx={{px: 1, py: .5}}>
          <Paper sx={{ background: "rgba(0,0,0,0.5)", height: '10rem'}}>
              <div class="scroll" style={{display: 'flex'}}>
                {shirtMap}
              </div>
          </Paper>  
        </Grid>
    </Grid>
  )

}

export default ShoppingCart