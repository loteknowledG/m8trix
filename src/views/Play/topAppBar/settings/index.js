import React, {useState} from 'react';
import { useRecoilState } from 'recoil';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, SvgIcon, Typography } from '@mui/material'
import GlassDrawer from '../../../../components/GlassDrawer'
import drawerOpenState from '../../../../atoms/drawerOpenState'

export default function Settings() {
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenState);
  const [dialogOpen, setDialogOpen] = useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(drawerOpen === 'right' ? false : 'right');
  };

  const ExportIcon = (props) => {
    return (
      <SvgIcon>
        <path fill="currentColor" d="M23,12L19,8V11H10V13H19V16M1,18V6C1,4.89 1.9,4 3,4H15A2,2 0 0,1 17,6V9H15V6H3V18H15V15H17V18A2,2 0 0,1 15,20H3A2,2 0 0,1 1,18Z" />
      </SvgIcon>
    )
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} >
      <Divider />
      <List>
      <Typography variant="h6" gutterBottom component="div">
        Play Settings
      </Typography>
      </List>
      <Divider />
      <List>
        <ListItem button key={'export'} onClick={() => setDialogOpen(true)}>
          <ListItemIcon>
            <ExportIcon />
          </ListItemIcon>
          <ListItemText primary={'export'} />
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
    </>
  );
}