import React, { useEffect, useState } from "react"
import axios from "axios"
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import { Box, Button, IconButton, SvgIcon, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom'
import styles from './imageGallery.css'

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

  return images ? 
    <Box container spacing={22}>
      <TextField sx={{pointerEvents: 'auto'}} fullWidth label="Title" variant="standard" />
      <ImageGallery sx={{
        ' .image-gallery-thumbnails .image-gallery-thumbnails-container': {
          cursor: 'pointer',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          pointerEvents: 'auto'
        },
        '.image-gallery': {
          cursor: 'pointer',
          pointerEvents: 'auto'
        },
        ' .image-gallery-content': {
          pointerEvents: 'auto'
        },
        pointerEvents: 'auto'
      }} items={images} lazyLoad />
    </Box> : 
    <></>
}
export default Matrix
