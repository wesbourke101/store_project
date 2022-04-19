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
        <Paper sx={{background: "linear-gradient( #362706, #464E2E, #ACB992, #E9E5D6)", height: '20rem'}}>
            <h1>{name}</h1>
            {description}
            {price}
            <img src={image} width="200rem" height="auto" />
            <Button onClick={(e) => addShirtPost(something, id)} variant="contained" sx={{bgcolor: "#ACB992"}} >
                Buy Shirt Now
            </Button>
        </Paper>
    </Grid>
  )
}

export default ShirtsContainer