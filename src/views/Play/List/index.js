import React, { useEffect } from 'react'
import axios from "axios"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { SvgIcon } from '@mui/material';


export const List = () => {
  const path = window.location.pathname
  useEffect(() => {
    const key = path.substring(path.lastIndexOf('/') + 1) 
      let shouldCancel = false
      //let shouldCancel = false
      const call = async () => {
        const response = await axios.get("https://opensheet.elk.sh/" + key + "/Playlist")
        if (!shouldCancel && response.data && response.data.length > 0) {
          console.log(response.data)
          // loopThroughSplittedText(response.data);
        }
      }
      call()
      return () => (shouldCancel = true)
    
  }, [])
  return (
    <></>
  )
}
export default List