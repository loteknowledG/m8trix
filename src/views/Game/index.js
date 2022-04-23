import React, { useEffect, useState } from "react"
import axios from 'axios'
import Moment from '../../components/Moment'
import { Box, CardActionArea, CardMedia, Grid, IconButton, SvgIcon } from '@mui/material'
import TopAppBar from '../../components/TopAppBar'
import GlassCard from '../../components/glass/GlassCard'
import { useHistory, useParams } from 'react-router-dom'


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

export const Game = () => {
  console.log('Game')
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
  }, [])

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

  return images ? 
    <Moment images={images} /> :
  <></>
}

export default Game