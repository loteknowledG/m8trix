import React, { useEffect, useState } from "react"
import axios from 'axios'
import Moment from '../../../components/Moment'
import { Paper, Stack } from '@mui/material'
import './mediaScroller.css'
import GlassPaper from '../../../components/glass/GlassPaper'

export const M8trix = () => {
  const [images, setImages] = useState([]);
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

  const thumbClick = (event, idx) => {
    console.log(event, idx)
  }

  const MediaScroller = () => {
    return (
    <Stack sx={{ 
      pointerEvents: 'auto',
      overflowX: 'scroll',
      scrollSnapType: 'x mandatory',
      display: 'flex'
      }} direction="row" spacing={1}>
      {images.map((image, idx)=> {
        return (
          <GlassPaper key={idx} sx={{ pointerEvent: 'auto', scrollSnapAlign: 'start' }} onClick={(event) => thumbClick(event, idx)}>
            <img src={image.thumbnail} loading="lazy" alt='...' />
          </GlassPaper>
        )
      })}
    </Stack>)
  }
  return images.length > 0 ? <> 
      <Moment images={images} />
      <MediaScroller  />
    </> :
  <></>
}


export default M8trix