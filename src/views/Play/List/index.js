import React, { useEffect, useState } from 'react'
import TopAppBar from '../../../components/TopAppBar'
import axios from 'axios'
import { Box, CardActions, CardActionArea, CardContent, CardMedia,
        Grid, IconButton, SvgIcon, Typography } from '@mui/material'
import GlassCard from '../../../components/glass/GlassCard'
import { useHistory } from 'react-router-dom'


const MatrixIcon = () => {
  return (
    <SvgIcon>
      <path fill='currentColor' d='M2,2H6V4H4V20H6V22H2V2M20,4H18V2H22V22H18V20H20V4M9,5H10V10H11V11H8V10H9V6L8,6.5V5.5L9,5M15,13H16V18H17V19H14V18H15V14L14,14.5V13.5L15,13M9,13C10.1,13 11,14.34 11,16C11,17.66 10.1,19 9,19C7.9,19 7,17.66 7,16C7,14.34 7.9,13 9,13M9,14C8.45,14 8,14.9 8,16C8,17.1 8.45,18 9,18C9.55,18 10,17.1 10,16C10,14.9 9.55,14 9,14M15,5C16.1,5 17,6.34 17,8C17,9.66 16.1,11 15,11C13.9,11 13,9.66 13,8C13,6.34 13.9,5 15,5M15,6C14.45,6 14,6.9 14,8C14,9.1 14.45,10 15,10C15.55,10 16,9.1 16,8C16,6.9 15.55,6 15,6Z' />
    </SvgIcon>
  )
}

const PlayIcon = () => {
  return (
    <SvgIcon>
      <path fill='currentColor' d='M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z' />
    </SvgIcon>
  )
}

export const List = () => {
  const path = window.location.pathname
  const [plays, setPlays] = useState([]);
  const history = useHistory()


  useEffect(() => {
    const key = path.substring(path.lastIndexOf('/') + 1) 
      let shouldCancel = false
      const call = async () => {
        const response = await axios.get('https://opensheet.elk.sh/' + key + '/Playlist')
        if (!shouldCancel && response.data && response.data.length > 0) {
          setPlays(
            response.data.map(row => ({
              coverArtUri: row['COVER-ART-URI'],
              playUri: row['PLAY-URI'],
              title: row['TITLE']
            })
          ))
        }
      }
      call()
      return () => (shouldCancel = true)
  }, [])

  const matrixClick = (playUri) => {
    history.push('/playMatrix/' + playUri.substring(path.lastIndexOf('/') + 1))
  } 

  return (
    <>
      <TopAppBar />
      <Box sx={{ mt:'17%', flexGrow: 1 }}>
        <Grid container alignItems="center" justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          { plays.map((play, index) => (
            <Grid item xs={3} md={4} key={index}>
              <GlassCard>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image={play.coverArtUri}
                    alt={play.title}
                  />
                  <CardContent>
                    <Typography 
                      className="font-effect-neon"
                      gutterBottom 
                      variant='h5' 
                      component='div'>
                      {play.title}
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                <CardActions>
                  <Box sx={{ flexGrow: 1, ml: 1}} onClick={()=>matrixClick(play.playUri)}>
                    <IconButton size="large" edge="start" >
                      <MatrixIcon />
                    </IconButton>
                    </Box>
                    <Box sx={{ mr: 1 }}>
                    <IconButton size="large">
                      <PlayIcon />
                    </IconButton>
                  </Box>
                </CardActions>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
export default List