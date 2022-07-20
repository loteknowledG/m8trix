import React, { useEffect, useState } from "react"
import axios from "axios"

export const useImages = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

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

  function onLoadMore() {
    setLoading(true);

    //setTimeout(() => {
      setItems((list) => list.concat(fakeData));
      setLoading(false);
    //}, 1000);
  }
}
export default useImages