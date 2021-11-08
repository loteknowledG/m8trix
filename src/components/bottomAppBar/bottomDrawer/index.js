import React from 'react'
import { useRecoilState } from 'recoil'
import GlassDrawer from '../'
import drawerOpenState from '../../../atoms/drawerOpenState'

export default function BottomDrawer() {
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenState);
  
  return (
    <GlassDrawer
      anchor={'bottom'}
      open={drawerOpen === 'bottom' ? true : false}
      onClose={() => setDrawerOpen(false)}
    >
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
888             d8           888                                    888              888   e88'Y88 <br/>
888  e88 88e   d88    ,e e,  888 ee 888 8e   e88 88e  Y8b Y8b Y888P 888  ,e e,   e88 888  d888  'Y <br/>
888 d888 888b d88888 d88 88b 888 P  888 88b d888 888b  Y8b Y8b Y8P  888 d88 88b d888 888 C8888 eeee<br/>
888 Y888 888P  888   888   , 888 b  888 888 Y888 888P   Y8b Y8b "   888 888   , Y888 888  Y888 888P<br/> 
888  "88 88"   888    "YeeP" 888 8b 888 888  "88 88"     YP  Y8P    888  "YeeP"  "88 888   "88 88" <br/> 
          </pre>
    </GlassDrawer>
  );
}
