import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TopAppBar from '../../components/TopAppBar'
import { useHistory, useParams } from 'react-router-dom'
import { Box, CardActionArea, CardContent, CardMedia, Grid, IconButton, Skeleton, SvgIcon, Typography } from '@mui/material'
import GlassCard from '../../components/glass/GlassCard'
import './pokemon.css'
import Tilt from 'react-parallax-tilt'
import ProgressiveImage from "react-progressive-graceful-image";


const MatrixIcon = () => {
  return (
    <SvgIcon>
      <path fill='currentColor' d='M2,2H6V4H4V20H6V22H2V2M20,4H18V2H22V22H18V20H20V4M9,5H10V10H11V11H8V10H9V6L8,6.5V5.5L9,5M15,13H16V18H17V19H14V18H15V14L14,14.5V13.5L15,13M9,13C10.1,13 11,14.34 11,16C11,17.66 10.1,19 9,19C7.9,19 7,17.66 7,16C7,14.34 7.9,13 9,13M9,14C8.45,14 8,14.9 8,16C8,17.1 8.45,18 9,18C9.55,18 10,17.1 10,16C10,14.9 9.55,14 9,14M15,5C16.1,5 17,6.34 17,8C17,9.66 16.1,11 15,11C13.9,11 13,9.66 13,8C13,6.34 13.9,5 15,5M15,6C14.45,6 14,6.9 14,8C14,9.1 14.45,10 15,10C15.55,10 16,9.1 16,8C16,6.9 15.55,6 15,6Z' />
    </SvgIcon>
  )
}

export default function Dashboard () {
  const { id } = useParams()
  const [plays, setPlays] = useState([])
  const history = useHistory()
  // call Survey then call Site
  useEffect(() => {
    let shouldCancel = false
    const callSurvey = async () => {
      if (id) {
        const responseSurvey = await axios.get('https://opensheet.elk.sh/1urt4Nxrn22iGy7kNV4T_cgbu2hOOyCGiPU6HbbLLUoE/Survey')
        if (!shouldCancel && responseSurvey.data && responseSurvey.data.length > 0) {
          const callSite = async () => {
            const responseSite = await axios.get('https://opensheet.elk.sh/' + handleUrlChange(responseSurvey.data.find(row => row['TITLE'].toLowerCase() == id.toLowerCase()).URL) + '/Plays')
            if (!shouldCancel && responseSite.data && responseSite.data.length > 0) {
              setPlays(
                responseSite.data.map(row => ({
                  coverArtUri: row['COVER-ART-URI'],
                  playUri: row['PLAY-URI'],
                  title: row['TITLE'],
                  _id: row['_ID']
                })
              ))
            }
          }
          callSite()
        }
      }
    }
    callSurvey()
    return () => (shouldCancel = true)
  }, [id])

  const handleUrlChange = (newValue) => {
    newValue = newValue.replace('/edit?usp=sharing', '')
    return newValue.substring(newValue.lastIndexOf('/') + 1)
  }
  const matrixClick = (playUri) => {
    history.push('/tactics/' + playUri.substring(playUri.lastIndexOf('/') + 1))
  } 

  const gameClick = (playUri) => {
    history.push('/game/' + playUri.substring(playUri.lastIndexOf('/') + 1))
  }
  const dominantImageColor = '#86356B';
  const placeholder = (
    <div
      style={{ backgroundColor: dominantImageColor, height: 300, width: 500 }}
    />
  );
  return plays ? <>
    <TopAppBar /> 
    <Box sx={{ flexGrow: 1, mt:37, ml: 7, mr: 7 }}>
      <Grid container alignItems="center" justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        { plays.map((play, idx) => (
          play ? 
          (<Grid item xs={3} md={4} key={idx} >
            <Tilt scale={1.137} transitionSpeed={2500}>
              <GlassCard className={['card', 'charizard', 'tilt-scale'].join(' ')}>
                <CardActionArea sx={{
                  pointerEvents: 'auto'}}
                  onClick={()=>gameClick(play.playUri)}>
                  <ProgressiveImage
                    delay={idx * 137}
                    src={play.coverArtUri}
                    placeholder=""
                    rootMargin="0% 0% 0%"
                  >
                    {(src, loading) => { 
                      return loading ? 
                        placeholder : 
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
                          src={src} 
                          alt={play.title} 
                          loading="lazy" />}}
                  </ProgressiveImage>
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
                <IconButton 
                  color="primary"
                  sx={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    pointerEvents: 'auto' 
                  }}
                  onClick={()=>matrixClick(play.playUri)}>
                  <MatrixIcon />
                </IconButton>
              </GlassCard>
            </Tilt>
          </Grid>) :
          (<Skeleton variant="rectangular" />)
        ))}
      </Grid>
    </Box>
  </> : 
  <Skeleton />
}