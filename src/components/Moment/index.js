import React, { useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import { motion } from "framer-motion"

export const Moment = ({images}) => {
  const [idx, setIdx] = useState(0)
  const { width, height, ref } = useResizeDetector();
  
  return <div 
    ref={ref}>
    {`${width}x${height}x${idx}`}
    <motion.button 
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        overflow: 'hidden',
        userSelect: 'none',
        '-moz-user-select': 'none',
        '-webkit-user-select': 'none',
        '-ms-user-select': 'none',
        pointerEvents: 'auto'
      }}
      whileTap={{ scale: 0.9 }}>
      <img 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          overflow: 'hidden',
          userSelect: 'none',
          '-moz-user-select': 'none',
          '-webkit-user-select': 'none',
          '-ms-user-select': 'none'
        }} 
        onClick={() => {
          setIdx(images.length > idx + 1 ? idx + 1 : 0)
        }} 
        src={ images.length > 0 ? images[idx].original : '' } 
        alt={ idx } 
      />
    </motion.button>
  </div>
}
export default Moment