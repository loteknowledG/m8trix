import React, { useState } from 'react';
import { Box, Button, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function ImportTab({ setCodeValue, setTabValue }) {
  const [value, setValue] = useState('URL');
  const [code, setCode] = useState();
  
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    setTabValue(newValue)
  }

  const handleCodeChange = (newValue) => {
    setCode(newValue)
    setCodeValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="Inload">
            <Tab label="URL" value="URL" />
            <Tab label="Code" value="Code" />
            <Tab label="File" value="File" />
          </TabList>
        </Box>
        <TabPanel value="URL">Item One</TabPanel>
        <TabPanel value="Code">
          <CodeEditor
            value={ code }
            language="html"
            placeholder="Paste Code."
            onChange={ (event) => handleCodeChange(event.target.value) }
            padding={ 15 }
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
