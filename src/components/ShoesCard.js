import React from 'react'
import ShoesContainer from './ShoesContainer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function ShirtsCards({pantsData}) {
  const cardsP = pantsData.map((pant) => {return <ShoesContainer pant={pant}/>})
  return (
    <Box padding={4}>
      <Grid container spacing={2}>
          {cardsP}
      </Grid>
    </Box>
  )
}

export default ShirtsCards