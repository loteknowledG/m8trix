import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Moment from '../../components/Moment'
import { Skeleton } from '@mui/material'
import { useParams } from 'react-router-dom'


export const Game = () => {
  const [images, setImages] = useState(null);
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
  
  return images ? 
    <Moment images={images} id="cookie" /> :
    <Skeleton />
}

export default Game