import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import "../index.css"

function PantsContainer({pant, addPantPost}) {
    const {description, image, name, price, id} = pant
    const something = 'pant_id'
  return (
    <Grid item xs={3}>
        <Paper sx={{background: "linear-gradient( rgba(54, 39, 6, .7), rgba(70, 78, 46, .7), rgba(172, 185, 146, .7), rgba(233, 229, 214, .7))", height: '20rem', position: "relative"}}>
            <h1>{name}</h1>
            <h4 style={{color: "#ACB992"}} >{description}</h4>
            <img src={image} width='auto' height='170rem' />
            <br/>
            <Button onClick={(e) => addPantPost(something, id)} variant="contained" sx={{bgcolor: "#ACB992", position: "absolute", bottom: '.4rem', transform: 'translate(-50%)'}} >
              Buy ${price}.00
            </Button>
        </Paper>
    </Grid>
  )
}
export default PantsContainer