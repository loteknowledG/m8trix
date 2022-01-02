import React, { useState } from 'react';
import { Box, Tab, TextField } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import CodeEditor from '@uiw/react-textarea-code-editor';
import {useDropzone} from 'react-dropzone'

export default function ImportTab({ setUrlValue, setPhotosHTMLValue, setTabValue }) {
  const [value, setValue] = useState('URL');
  const [photosHTML, setPhotosHTML] = useState();
  const [url, setUrl] = useState();

  const handleTabChange = (newValue) => {
    setValue(newValue);
    setTabValue(newValue)
  }

  const handlePhotosHTMLChange = (newValue) => {
    setPhotosHTML(newValue)
    setPhotosHTMLValue(newValue)
  }

  const handleUrlChange = (newValue) => {
    const getLastItem = newValue.substring(newValue.lastIndexOf('/') + 1)
    setUrl(getLastItem)
    setUrlValue(getLastItem)
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
            <Tab label="URL" value="URL" />
            <Tab label="Photos HTML" value="Photos HTML" />
            <Tab label="Play JSON" value="Play JSON" />
          </TabList>
        </Box>
        <TabPanel value="URL" >
          <TextField 
            // value= { url }
            sx={{ width:'100%' }} 
            id="standard-basic" 
            label="google photos Link-sharing" 
            variant="standard"
            onChange={ (event) => handleUrlChange(event.target.value) } 
          />
        </TabPanel>
        <TabPanel value="Photos HTML">
          <CodeEditor
            value={ photosHTML }
            language="html"
            placeholder="Paste Photos HTML."
            onChange={ (event) => handlePhotosHTMLChange(event.target.value) }
            padding={ 15 }
            style={{
              fontSize: 12,
              backgroundColor: "#261D45",
              fontFamily: 'Hack,ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
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
