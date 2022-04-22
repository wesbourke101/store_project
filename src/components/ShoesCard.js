import React from 'react'
import ShoesContainer from './ShoesContainer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function ShirtsCards({searchState, pantsData, addShoePost}) {
  const filteredSearchList = pantsData.filter(shoe => shoe.name.toLowerCase().includes(searchState.toLowerCase()))
  const cardsP = filteredSearchList.map((pant) => {return <ShoesContainer addShoePost={addShoePost} pant={pant}/>})

  return (
    <Box padding={4}>
      <Grid container spacing={2}>
          {cardsP}
      </Grid>
    </Box>
  )
}
export default ShirtsCards