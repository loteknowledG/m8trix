import React from 'react'
import { useRecoilState } from 'recoil'
import GlassDrawer from '../../glass/GlassDrawer'
import GlassBox from '../../glass/GlassBox'
import drawerOpenState from '../../../atoms/drawerOpenState' 
import Tree from './tree'

export default function Navigator() {
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenState)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(drawerOpen === 'left' ? false : 'left');
  };


  const list = (anchor) => (
    <GlassBox
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Tree/>
    </GlassBox>
  )

  return (
      <GlassDrawer
        anchor={'left'}
        open={drawerOpen === 'left' ? true : false}
        onClose={() => setDrawerOpen(false)}
      >
        {list('left')}
      </GlassDrawer>
  );
}