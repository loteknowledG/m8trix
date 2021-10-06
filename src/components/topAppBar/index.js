import React, { useRef, useState } from 'react';
import { Badge, Box, Button, Drawer, IconButton, Toolbar  } from '@mui/material';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GlassAppBar from '../glassAppBar';
import GlassDrawer from '../glassDrawer';


export default function TopAppBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const menuButtonRef = useRef();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <GlassAppBar position="static" >
        <Toolbar>
        <IconButton size="large" aria-label="menu" ref={menuButtonRef}>
          <MenuIcon color="primary"/>
        </IconButton>
          <pre style={{
            flexGrow: 1,
            fontFamily: 'Hack, monospace',
            fontSize: 7,
            position: 'relative',
            whiteSpace: 'pre',
            color: 'whitesmoke',
            textAlign: 'center',
            textShadow:
              '0 0 3px #9D33FF,' +
              '0 0 5px #9D33FF,' +
              '0 0 10px #9D33FF,' +
              '0 0 20px #9D33FF,' +
              '0 0 40px #9D33FF,' +
              '0 0 50px #9D33FF',
          }} ><br/>
    @@@@@@@@@@   @@@@@@  @@@@@@@ @@@@@@@  @@@ @@@  @@@<br/>
    @@! @@! @@! @@!  @@@   @@!   @@!  @@@ @@! @@!  !@@<br/>
    @!! !!@ @!@  !@!@!@    @!!   @!@!!@!  !!@  !@@!@! <br/>
    !!:     !!: !!:  !!!   !!:   !!: :!!  !!:  !: :!! <br/>
    :       :    :.:: :     :     :   : : :   :::  :::<br/>
            </pre>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <GlassDrawer menuButton={menuButtonRef} />
      </GlassAppBar>
      
    </Box>
  );
}
