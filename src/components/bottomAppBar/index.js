import * as React from 'react';
import { CssBaseline, IconButton, SvgIcon, Toolbar } from '@mui/material';
import { useRecoilState } from 'recoil';
import GlassAppBar from './';
import drawerOpenState from '../../atoms/drawerOpenState'
import BottomDrawer from './bottomDrawer';

function ChevronUpIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill="currentColor" d="M16.59,9.42L12,4.83L7.41,9.42L6,8L12,2L18,8L16.59,9.42M16.59,15.42L12,10.83L7.41,15.42L6,14L12,8L18,14L16.59,15.42M16.59,21.42L12,16.83L7.41,21.42L6,20L12,14L18,20L16.59,21.42Z" />
    </SvgIcon>
  );
}

export default function BottomAppBar() {
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenState);

  return (
    <>
      <CssBaseline />
      
      <GlassAppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton 
            size="large"
            aria-label="menu"
            onClick={() => setDrawerOpen('bottom')}
          >
            <ChevronUpIcon color="primary"/>
          </IconButton>
        </Toolbar>
        <BottomDrawer />
      </GlassAppBar>
    </>
  );
}
