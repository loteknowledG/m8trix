import React from 'react'
import TopAppBar from '../../../components/TopAppBar'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

export function Matrix() {
  const id = useParams().id
  return (<>
    <TopAppBar />
    <Box sx={{ flexGrow: 1 }}>
    <img 
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        overflow: 'hidden',
        userSelect: 'none',
        'MozUserSelect': 'none',
        'WebkitUserSelect': 'none',
        'MsUserSelect': 'none'
      }} 
      src={ 'https://lh3.googleusercontent.com/' + id } 
      alt={ 'https://lh3.googleusercontent.com/' + id } 
    />
    </Box>
  </>)
}
export default Matrix