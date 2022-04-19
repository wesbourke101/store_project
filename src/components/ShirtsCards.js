import React from 'react'
import ShirtsContainer from './ShirtsContainer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function ShirtsCards({pantsData}) {
  const cardsP = pantsData.map((pant) => {return <ShirtsContainer pant={pant}/>})
  return (
    <Box padding={4}>
      <Grid container spacing={2}>
          {cardsP}
      </Grid>
    </Box>
  )
}

export default ShirtsCards