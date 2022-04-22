import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import "../index.css"

function ShirtsContainer({pant, addShirtPost}) {
    const {description, image, name, price, id} = pant
    const something = 'shirt_id'
  return (
    <Grid item xs={3}>
          <Paper sx={{background: "linear-gradient( rgba(54, 39, 6, .7), rgba(70, 78, 46, .7), rgba(172, 185, 146, .7), rgba(233, 229, 214, .7))", height: '23rem'}}>
            <h1>{name}</h1>
            <h4 style={{color: "#ACB992"}} >{description}</h4>
            <img src={image} width="200rem" height="200rem" />
            <Button onClick={(e) => addShirtPost(something, id)} variant="contained" sx={{bgcolor: "#ACB992"}} >
                Buy ${price}.00
            </Button>
        </Paper>
    </Grid>
  )
}
export default ShirtsContainer