import React from 'react'
import PantsContainer from './PantsContainer'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function PantsCards({pantsData, addPantPost}) {
  const cardsP = pantsData.map((pant) => {return <PantsContainer addPantPost={addPantPost} pant={pant}/>})
  return (
    <Box padding={4}>
      <Grid container spacing={2}>
          {cardsP}
      </Grid>
    </Box>
  )
}
export default PantsCards