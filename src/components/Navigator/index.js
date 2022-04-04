import React, {useState} from 'react'
import { SvgIcon, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import { motion } from "framer-motion"
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useHistory } from "react-router-dom";

const NavigationIcon = () => {
  return (
    <SvgIcon>
      <path fill="currentColor" d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
    </SvgIcon>
  )
}

const BackIcon = () => {
  return (
    <SvgIcon>
      <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </SvgIcon>
  )
}

const ForwardIcon = () => {
  return (
    <SvgIcon>
      <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
    </SvgIcon>
  )
}

const actions = [
  { icon: <BackIcon />, name: 'back' },
  { icon: <ForwardIcon />, name: 'forward' },
];
export const Navigator = () => {
  let history = useHistory();
  const { height, width } = useWindowDimensions()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleSpeedDialAction = (name) => {
    if (name === 'back')
      history.goBack()
    if (name === 'forward')
      history.goForward()
  }
  return (
    <motion.div 
      drag 
      dragConstraints={{ 
        top: 0, 
        left: 0, 
        bottom: height - 188, 
        right: width - 188
      }}
      whileDrag={{ scale: 1.2 }} > 
      <SpeedDial
        ariaLabel="Navigator"
        icon={<NavigationIcon  />}
        onClick={() => { 
          setOpen(open => !open) 
        }}
        open={open} >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              handleSpeedDialAction( action.name)
            }}
          />
        ))}
        </SpeedDial>
      </motion.div>
    )
}
export default Navigator