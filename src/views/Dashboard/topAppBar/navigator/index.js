import React from 'react';
import { useRecoilState } from 'recoil';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GlassDrawer from '../../../../components/GlassDrawer'
import drawerOpenState from '../../../../atoms/drawerOpenState' 
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
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Tree/>
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  )

  return (
    <>
      <GlassDrawer
        anchor={'left'}
        open={drawerOpen === 'left' ? true : false}
        onClose={() => setDrawerOpen(false)}
      >
        {list('left')}
      </GlassDrawer>
    </>
  );
}