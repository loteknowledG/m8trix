import React, { useEffect } from "react"
import axios from "axios"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import { SvgIcon } from '@mui/material';

const HorizontalFlip = () => {
  return (
    <button>
      <SvgIcon sx={{ 
        position: 'absolute',
        top: 22,
        left: 22,
        zIndex: 10 }} >
        <path fill="currentColor" d="M15 21H17V19H15M19 9H21V7H19M3 5V19C3 20.1 3.9 21 5 21H9V19H5V5H9V3H5C3.9 3 3 3.9 3 5M19 3V5H21C21 3.9 20.1 3 19 3M11 23H13V1H11M19 17H21V15H19M15 5H17V3H15M19 13H21V11H19M19 21C20.1 21 21 20.1 21 19H19Z" />
      </SvgIcon>
    </button>
  )
}

export const Gallery = () => {
  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/1JUTcBM25Ys5lKVUNmWwdALc1W0s383poiQPCqwVIwCI/edit?usp=sharing')
      .then(response => console.log(response))
      // .then(data => console.log(data));
  }, [])
  const [images, setImages] = React.useState(null);
  
  React.useEffect(() => {
    const path = window.location.pathname
    const key = path.substring(path.lastIndexOf('/') + 1)
    
    let shouldCancel = false
    const call = async () => {
      const response = await axios.get("https://translucent-ivy-elf.glitch.me/" + key)
      if (!shouldCancel && response.data && response.data.length > 0) {
        loopThroughSplittedText(response.data);
      }
    }
    call()
    return () => (shouldCancel = true)
  }, [])
  
  function renderCustomControls () {
    console.log('render custom controls')
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

  return images ? <ImageGallery items={images} renderCustomControls={HorizontalFlip} /> : null
}
export default Gallery
