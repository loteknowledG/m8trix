import React, { useState } from 'react';
import { Box, Tab, TextField } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import CodeEditor from '@uiw/react-textarea-code-editor';
import {useDropzone} from 'react-dropzone'

export default function ImportTab({ setUrlValue, setPhotosHTMLValue, setTabValue }) {
  const [value, setValue] = useState('Photos URL');
  const [photosHTML, setPhotosHTML] = useState();
  const [photosUrl, setPhotosUrl] = useState();

  const handleTabChange = (newValue) => {
    setValue(newValue);
    setTabValue(newValue)
  }

  const handlePhotosHTMLChange = (newValue) => {
    setPhotosHTML(newValue)
    setPhotosHTMLValue(newValue)
  }

  const handlePhotosUrlChange = (newValue) => {
    const getLastItem = newValue.substring(newValue.lastIndexOf('/') + 1)
    setPhotosUrl(getLastItem)
    setUrlValue(getLastItem)
    console.log('sys')
  }

  const handleSheetsUrlChange = (newValue) => {
    const getLastItem = newValue.substring(newValue.lastIndexOf('/') + 1)
    
  }

  /* React Dropzone */ 
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  })

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="Inload">
            <Tab label="Photos URL" value="Photos URL" />
            <Tab label="Sheets URL" value="Sheets URL" />
            <Tab label="Play JSON" value="Play JSON" />
          </TabList>
        </Box>
        <TabPanel value="Photos URL" >
          <TextField 
            // value= { url }
            sx={{ width:'100%' }} 
            id="standard-basic" 
            label="google photos Link-sharing" 
            variant="standard"
            onChange={ (event) => handlePhotosUrlChange(event.target.value) } 
          />
        </TabPanel>
        <TabPanel value="Sheets URL">
          <TextField 
            // value= { url }
            sx={{ width:'100%' }} 
            id="standard-basic" 
            label="google sheets Link-sharing" 
            variant="standard"
            onChange={ (event) => handleSheetsUrlChange(event.target.value) } 
          />
        </TabPanel>
        <TabPanel value="Play JSON">
          <div className="container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop play JSON file here</p>
              <button type="button" onClick={open}>
                Open File Dialog
              </button>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
