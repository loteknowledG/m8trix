import { useState }  from 'react';
import {useSetRecoilState } from 'recoil';
import PropTypes from 'prop-types';
import {  Button, Dialog, DialogActions, DialogContent, DialogTitle }from '@mui/material';
import ImportTab from './importTab'
import { v4 as uuidv4 } from 'uuid'
import { playsState } from '../../../../../atoms/playsState';
import { useHistory } from 'react-router-dom'

export default function ImportDialog({ onClose, open}) {
  const [tabValue, setTabValue] = useState('URL') 
  const [code, setCode] = useState()
  const setPlays = useSetRecoilState(playsState)
  const history = useHistory()

  const handleClose = () => {
    onClose();
  };

  const parseCode = () => {  
    if (code) {
      const pix = code.split(',')
        .filter(pic => pic.includes('https://lh3'))
        .map(pic => '"' + pic.replace(/(\["|")/g, '').replaceAll(']', '').replace(/(\r\n\t|\n|\r\t)/gm, "") + '"')
      
      if (pix) {
        const play = {}
        play.key = uuidv4()
        play.moments = JSON.parse('{ "pix": [' + pix  + ']}').pix.map((pic) => (
          { id: uuidv4(), src: pic }
        ))
        play.cover = play.moments[0].src
        setPlays((oldPlays) => [
          ...oldPlays, 
          play,
        ])
        onClose()
        history.push('/play/' + play.key)
      }
    }  
  }

  const ActionButton = (action) => {
    if (tabValue === 'URL') {
      return <></>
    } else if (tabValue === 'Code') {
      return <Button onClick={ parseCode } >Parse Code</Button>
    } else if (tabValue === 'File') {
      return <></>
    } else {
      return <></>
    }
  }

  return (
    <Dialog onClose={ handleClose } open={ open }>
      <DialogTitle>Import a Play</DialogTitle>
      <DialogContent>
        <ImportTab setCodeValue={ (value)=>setCode(value) } setTabValue={ (value)=>{setTabValue(value)} }/>
      </DialogContent>
      <DialogActions>
        <ActionButton />
      </DialogActions>
    </Dialog>
  );
}

ImportDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
