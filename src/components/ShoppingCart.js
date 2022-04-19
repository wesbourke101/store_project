import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function ShoppingCart({shoppingCart}) {
    console.log(shoppingCart)
  return (
      
    <Grid container>
        <Grid item xs={12}>
        <Paper sx={{ background: "rgba(0,0,0,0.5)", height: '5rem'}}>
            <h2>This is a message for the cart</h2>
        </Paper>
        </Grid>  
    </Grid>
  )
}

export default ShoppingCart