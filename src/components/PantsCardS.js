import React from 'react'
import PantsContainer from './PantsContainer'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function PantsCards({searchState, pantsData, addPantPost}) {

  console.log(pantsData)
  const filteredSearchList = pantsData.filter(pant => pant.name.toLowerCase().includes(searchState.toLowerCase()))
  const cardsP = filteredSearchList.map((pant) => {return <PantsContainer addPantPost={addPantPost} pant={pant}/>})

  return (
    <Box padding={4}>
      <Grid container spacing={2}>
          {cardsP}
      </Grid>
    </Box>
  )
}
export default PantsCards