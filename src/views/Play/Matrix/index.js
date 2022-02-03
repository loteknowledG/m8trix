import React, { useEffect, useState } from "react"
import axios from "axios"
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import { Box, Button, IconButton, SvgIcon, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom'

export const Matrix = () => {
  const history = useHistory()
  // useEffect(() => {
  //   fetch('https://sheets.googleapis.com/v4/spreadsheets/1vDIghRcWeNr2GP-NgkkLEKWvXngQJxEC8gWnphCOzc4?callback=googleDocCallback')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }, [])
  const [images, setImages] = useState(null);
  
  useEffect(() => {
    const path = window.location.pathname
    
      const key = path.substring(path.lastIndexOf('/') + 1)
      let shouldCancel = false
      const call = async () => {
        const response = await axios.get("https://translucent-ivy-elf.glitch.me/" + key)
        //console.log(response)
        if (!shouldCancel && response.data && response.data.length > 0) {
          loopThroughSplittedText(response.data);
        }
      }
      call()
      return () => (shouldCancel = true)
    
      // const key = path.substring(path.lastIndexOf('/') + 1) 
      // let shouldCancel = false
      // //let shouldCancel = false
      // const call = async () => {
      //   const response = await axios.get("https://opensheet.elk.sh/" + key + "/Playlist")
      //   if (!shouldCancel && response.data && response.data.length > 0) {
      //     console.log(response.data)
      //     // loopThroughSplittedText(response.data);
      //   }
      // }
      // call()
      // return () => (shouldCancel = true)
    
  }, [])
  
  const HorizontalFlip = () => {
    return (
      <IconButton sx={{ 
        position: 'absolute',
        top: 11,
        left: 11,
        zIndex: 10, fontSize:'100%' }}>
        <SvgIcon>
          <path d="M15 21H17V19H15M19 9H21V7H19M3 5V19C3 20.1 3.9 21 5 21H9V19H5V5H9V3H5C3.9 3 3 3.9 3 5M19 3V5H21C21 3.9 20.1 3 19 3M11 23H13V1H11M19 17H21V15H19M15 5H17V3H15M19 13H21V11H19M19 21C20.1 21 21 20.1 21 19H19Z" />
        </SvgIcon>
      </IconButton>
    )
  }
  
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

  function renderCustomControls () {
    return <HorizontalFlip ></HorizontalFlip>
  }

  function loopThroughSplittedText(data) {
    for (var i = 0; i < data.length; i++) {
      // for each iteration console.log a word
      // and make a pause after it
      (function (i) {
        setTimeout(function () {
          setImages(
            data.map(url => ({
              original: `${url}=w1024`,
              thumbnail: `${url}=w100`
            }))
          )
        }, 3333 * i);
      }) (i);
    };
  }

  return images ? 
  <Box container spacing={22}>
    <TextField fullWidth label="Title" variant="standard" />
    <ImageGallery items={images} renderCustomControls={renderCustomControls} />
    <BackButton/>
  </Box> : null
}
export default Matrix
