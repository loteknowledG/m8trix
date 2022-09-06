import React, { useState } from 'react'
import { Card, CardActionArea, LinearProgress } from '@mui/material/'
import { motion } from 'framer-motion'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import Tilt from 'react-parallax-tilt'
import Points from '../Points'

export const Moment = ({images, id}) => {
  const [idx, setIdx] = useState(0)
  const [progress, setProgress] = useState(0);
  const { height, width } = useWindowDimensions();
  const length = (height <= width) ? height : width
  return <Tilt 
    scale={.88} 
    style={{ 
      width: length,
      height: length,
      display: 'flex',
      justifyContent: 'center'
    }} 
    transitionSpeed={2500}>   
    <motion.div 
      style={{
        width: length,
        height: length,
        objectFit: 'contain',
        overflow: 'hidden',
        userSelect: 'none',
        'MozUserSelect': 'none',
        'WebkitUserSelect': 'none',
        'MsUserSelect': 'none',
        pointerEvents: 'auto'
      }}
      whileTap={{ scale: 0.9 }}>
      <Points>
        <Card>
          <CardActionArea>
            <img 
              style={{
                width: length,
                height: length,
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
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </CardActionArea>
        </Card>
      </Points>
      <LinearProgress variant="determinate" value={progress} />
    </motion.div>
  </Tilt>
}
export default Moment