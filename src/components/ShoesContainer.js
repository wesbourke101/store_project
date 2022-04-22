import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import "../index.css"

function ShoesContainer({pant, addShoePost}) {
    const {description, image, name, price, id} = pant
    const nameIT = 'shoe_id'
  return (
    <Grid item xs={3}>
        <Paper sx={{background: "linear-gradient( rgba(54, 39, 6, .7), rgba(70, 78, 46, .7), rgba(172, 185, 146, .7), rgba(233, 229, 214, .7))", height: '21rem', position: "relative"}}>
            <h1>{name}</h1>
            <h4 style={{color: "#ACB992"}} >{description}</h4>
            <img src={image} width="170rem" height="auto" />
            <Button onClick={(e)=> addShoePost(nameIT, id)} variant="contained" sx={{bgcolor: "#ACB992", position: "absolute", bottom: '.4rem', transform: 'translate(-150%)'}} >
                Buy ${price}.00
            </Button>
        </Paper>
    </Grid>
  )
}
export default ShoesContainer