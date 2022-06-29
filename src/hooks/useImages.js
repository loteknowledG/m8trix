import React, { useEffect, useState } from "react"
import axios from "axios"

export const useImages = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  
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
}
export default useImages