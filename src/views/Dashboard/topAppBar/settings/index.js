import React, {useState} from 'react';
import { useRecoilState } from 'recoil';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, SvgIcon } from '@mui/material'
import GlassDrawer from '../../../../components/GlassDrawer'
import drawerOpenState from '../../../../atoms/drawerOpenState'
import ImportDialog from './importDialog' 

export default function Settings() {
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenState);
  const [dialogOpen, setDialogOpen] = useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(drawerOpen === 'right' ? false : 'right');
  };

  const ImportIcon = (props) => {
    return (
      <SvgIcon  {...props}>
          <path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
      </SvgIcon>
    )
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
      </List>
      <Divider />
      <List>
        
      </List>
      <Divider />
      <List>
        <ListItem button key={'import'} onClick={() => setDialogOpen(true)}>
          <ListItemIcon>
            <ImportIcon />
          </ListItemIcon>
          <ListItemText primary={'import'} />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <GlassDrawer
        anchor={'right'}
        open={drawerOpen === 'right' ? true : false}
        onClose={() => setDrawerOpen(false)}
      >
        {list('right')}
      </GlassDrawer>
      <ImportDialog 
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}