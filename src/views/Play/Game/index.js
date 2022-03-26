import React, { useEffect, useState } from "react"
import axios from 'axios'
import Moment from '../../../components/Moment'


export const Game = () => {
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
  return images.length > 0 ? 
    <Moment images={images} /> :
  <></>
}

export default Game