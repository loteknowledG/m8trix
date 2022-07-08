import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box, CardActionArea, CardMedia, Grid, IconButton, Skeleton, SvgIcon } from '@mui/material'
import TopAppBar from '../../components/TopAppBar'
import GlassCard from '../../components/glass/GlassCard'
import { useHistory, useParams } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'
import ProgressiveImage from "react-progressive-graceful-image";

const CheckboxBlankCircleOutlineIcon = () => {
  return (
    <SvgIcon>
      <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
    </SvgIcon>
  )
}

const CheckboxMarkedCircle = () => {
  return (
    <SvgIcon>
      <path fill="currentColor" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
    </SvgIcon>
  )
}

export const Tactics = () => {
  // const { items, infiniteRef } = useFakeData();

  const [images, setImages] = useState(null);
  const [selectedImages, setSelectedImages] = useState([])
  const history = useHistory()
  const id = useParams().id

  useEffect(() => {
    let shouldCancel = false
    const call = async () => {
      const response = await axios.get("https://translucent-ivy-elf.glitch.me/" + id)
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(response.data)
      }
    }
    call()
    return () => (shouldCancel = true)
  }, [id])

  const selectedChanged = (image) => {
    if (!selectedImages.includes(image)) {
      setSelectedImages([...selectedImages, image])
    } else {
      setSelectedImages(selectedImages.filter(item => item !== image))
    }
  }

  const cardActionAreaClick = (image) => {
    history.push('/matrix/' + image.substring(image.lastIndexOf('/') + 1))
  }

  const placeholder = (
    <div
      style={{ 
        backgroundColor: '#86356B', 
        height: 337, 
        width: 337
      }}
    />
  )

  return images ? <>
    <TopAppBar />
    <Box sx={{ flexGrow: 1 }}>
      <Grid container alignItems="center" justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        { images.map((image, idx) => (
          <Grid item xs={3} md={4} key={idx}>
            <Tilt scale={1.137} transitionSpeed={2500}>
              <GlassCard sx={{pointerEvents: 'auto' }}>
                <CardActionArea  sx={{ position: 'relative' }} onClick={() => cardActionAreaClick(image)}>
                  <ProgressiveImage
                    delay={idx * 137}
                    src={image}
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
                          alt="an alternative text" 
                          loading="lazy" />}}
                  </ProgressiveImage>
                </CardActionArea>
                {selectedImages.includes(image) ? (
                  <IconButton sx={{ position: 'absolute', top: 0, left: 0 }} onClick={()=> selectedChanged(image)}>
                    <CheckboxMarkedCircle />
                  </IconButton>
                ) : (
                  <IconButton sx={{ position: 'absolute', top: 0, left: 0 }} onClick={()=> selectedChanged(image)}>
                    <CheckboxBlankCircleOutlineIcon />
                  </IconButton>
                )}
              </GlassCard>
            </Tilt>
          </Grid>
        ))}
      </Grid>
    </Box>
  </> : 
  <Skeleton />
}
export default Tactics
