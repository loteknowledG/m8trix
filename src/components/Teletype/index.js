import React  from 'react'
import { Box } from '@mui/material'



export const Teletype = ({typings}) => {
  // const classes = useStyles()
  console.log(typings)
  console.log(typings[Math.floor(Math.random() * typings.length)])
  return (
    <React.Fragment>
      <Box
        display="flex" 
        height={'100vh'}
      >
        <Box m="auto">
          {typings[Math.floor(Math.random() * typings.length)]}
        </Box>
      </Box>
      
    </React.Fragment>
  )
}


export default Teletype 