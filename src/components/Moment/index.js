import React, { useState } from 'react'
import { Card, CardActionArea, CardMedia, LinearProgress } from '@mui/material/'
import { useResizeDetector } from 'react-resize-detector'
import { motion } from 'framer-motion'
import LinearBuffer from '../LinearBuffer'
import { useRecoilState } from 'recoil'

export const Moment = ({images, id}) => {
  const [idx, setIdx] = useState(0)
  const [clickCount, setClickCount] = useState(0)
  const [progress, setProgress] = useState(0);
  const { width, height, ref } = useResizeDetector()
  return <div 
    ref={ref}>
    {`${width}x${height}x${idx}`}
    <motion.div 
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        overflow: 'hidden',
        userSelect: 'none',
        'MozUserSelect': 'none',
        'WebkitUserSelect': 'none',
        'MsUserSelect': 'none',
        pointerEvents: 'auto'
      }}
      whileTap={{ scale: 0.9 }}>
      <Card>
        <CardActionArea>
        <img 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            overflow: 'hidden',
            userSelect: 'none',
            'MozUserSelect': 'none',
            'WebkitUserSelect': 'none',
            'MsUserSelect': 'none'
          }} 
          onClick={() => {
            setProgress((oldProgress) => {
              if (oldProgress === 100) {
                setIdx(images.length > idx + 1 ? idx + 1 : 0)
                return 0;
              }
              const diff = Math.random() * 10;
              return Math.min(oldProgress + diff, 100);
            });
          }} 
          src={ images.length > 0 ? images[idx] : '' } 
          alt={ idx } 
        />
        </CardActionArea>
      </Card>
      <LinearProgress variant="determinate" value={progress} />
    </motion.div>
  </div>
}
export default Moment