import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import "../index.css"


function ShoppingCart({cartObject, shoppingCartShoes, shoppingCartShirts, shoppingCartPants, handleDeleteClick}) {

  function runTotals() {  
    let shoes = shoppingCartShoes.reduce((a, b) => a + b.price, 0)
    let shirts = shoppingCartShirts.reduce((a, b) => a + b.price, 0)
    let pants =shoppingCartPants.reduce((a, b) => a+ b.price, 0)
    return shoes + shirts + pants
  }
  //  let fook = shoppingCartPants.id
   let total = runTotals()
  // console.log(cartObject[0].id)
  // console.log(cartObject.find(cart => cart.pant_id === 2))

  const shirtMap = cartObject.map(purchase => {
    console.log(purchase.name)
    return <div ><h4>{purchase.shoe?.name || purchase.shirt?.name || purchase.pant?.name}</h4><h5>{purchase.shoe?.description || purchase.shirt?.description || purchase.pant?.description}</h5><button id={purchase.id} onClick={handleDeleteClick}>[x]</button> 
    
      </div>
  })
  return (

    <Grid container>
        <Grid item xs={12}>
          <Paper sx={{ background: "rgba(0,0,0,0.5)", height: '10rem'}}>
              <h7 id="cartOne" >Total $: {total}.00</h7>
              <div style={{display: 'flex'}}>
              {shirtMap}
              </div>
          </Paper>
        </Grid>  
    </Grid>
  )
}

export default ShoppingCart