import React, { useEffect, useState } from "react"
import axios from "axios"
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import { Box, Button, IconButton, SvgIcon, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom'
import ProgressiveImage from "react-progressive-graceful-image";

export const Matrix = () => {
  const history = useHistory()
  const [images, setImages] = useState(null);
  
  useEffect(() => {
    const path = window.location.pathname
      const key = path.substring(path.lastIndexOf('/') + 1)
      let shouldCancel = false
      const call = async () => {
        const response = await axios.get("https://translucent-ivy-elf.glitch.me/" + key)
        if (!shouldCancel && response.data && response.data.length > 0) {
          setImages(
            response.data.map(url => ({
              original: `${url}=w1024`,
              thumbnail: `${url}=w100`
            }))
          )
          
        }
      }
      call()
      return () => (shouldCancel = true)
  }, [])
  
  const BackButton = () => {
    return (
      <Button sx={{ 
        position: 'absolute',
        bottom: 11,
        left: 11,
        zIndex: 10, 
        fontSize:'100%',
        color: 'primary' }} 
        aria-label="back to playlist"
        onClick={() => { history.push('/playList/') }} >
        <SvgIcon>
          <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
        </SvgIcon>
      </Button>
    )
  }


  return images ? 
    <Box container spacing={22}>
      <TextField fullWidth label="Title" variant="standard" />
      <ImageGallery items={images} lazyLoad />
      <BackButton/>
    </Box> : 
    <></>
}
export default Matrix
