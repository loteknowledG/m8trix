import React from 'react'
import { useRecoilState } from 'recoil'
import GlassDrawer from '../'
import drawerOpenState from '../../../atoms/drawerOpenState'
import BottomAccordion from './bottomAccordion'

export default function BottomDrawer() {
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenState);
  
  return (
    <GlassDrawer
      anchor={'bottom'}
      open={drawerOpen === 'bottom' ? true : false}
      onClose={() => setDrawerOpen(false)}
    >
      <BottomAccordion />
    </GlassDrawer>
  );
}
