import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CrazyImageBox from './CrazyImageBox'

function Home() {
  return (
    <Box>
      <CrazyImageBox />
      <Paper sx={{backgroundColor: '#362706'}}>
        <h1 style={{color: '#464E2E', padding: '1rem'}}>Rock climbing: from ancient practice to Olympic sport</h1>
        <p style={{color: '#E9E5D6', padding: '1rem'}}>Since modern recreational climbing began in the late 19th century, breakthroughs derived from new technology and tactics have pushed it in myriad directions.<br/>

        Today, as international competitors at the highest echelons of the sport look forward to climbing’s debut in the 2020 Tokyo Olympics, thousands of new enthusiasts have been introduced to the sport thanks to the burgeoning indoor climbing gym industry. Meanwhile, ever growing numbers of elite climber-explorers continue to travel to the far ends of the earth in search of “untouched stone.”<br/>
        _______________________________________________________________________________________________
        </p>
      </Paper>
    </Box>
  )
}

export default Home