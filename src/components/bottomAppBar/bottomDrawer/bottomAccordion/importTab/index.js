import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Box, Button, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { v4 as uuidv4 } from 'uuid'
import { pixState } from '../../../../../atoms/pixState';
import { useHistory } from "react-router-dom";

export default function ImportTab() {
  let history = useHistory();
  const [value, setValue] = useState('URL');
  const [pix, setPix] = useRecoilState(pixState);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCode = () => {  
    if (code) {
      const gifs = code.split(',')
        .filter(gif => gif.includes('https://lh3'))
        .map(gif => '"' + gif.replace(/(\["|")/g, '').replace(/(\r\n\t|\n|\r\t)/gm, "") + '"')
      
      if (gifs.length) {
        const play = {}
        play.key = uuidv4()
        play.pix = JSON.parse('{ "pix": [' + gifs  + ']}').pix.map((moment) => {
          return { id: uuidv4(), src: moment }
        })
        play.cover = play.pix[0].src
        setPix((oldPix) => [
          ...oldPix, 
          play,
        ])
        history.push('/play')
      }
    }  
  }

  const [code, setCode] = useState();

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="Inload">
            <Tab label="URL" value="URL" />
            <Tab label="Code" value="Code" />
            <Tab label="File" value="File" />
          </TabList>
        </Box>
        <TabPanel value="URL">Item One</TabPanel>
        <TabPanel value="Code">
          <CodeEditor
            value={code}
            language="html"
            placeholder="Paste Code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              fontSize: 12,
              backgroundColor: "#f5f5f5",
              fontFamily: 'Hack,ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </TabPanel>
        <TabPanel value="File">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
