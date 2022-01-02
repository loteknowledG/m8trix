import { useState }  from 'react';
import {useSetRecoilState } from 'recoil';
import PropTypes from 'prop-types';
import {  Button, Dialog, DialogActions, DialogContent, DialogTitle }from '@mui/material';
import ImportTab from './importTab'
import { v4 as uuidv4 } from 'uuid'
import { pixState } from '../../atoms/pixState';
import { useHistory } from "react-router-dom";

export default function ImportDialog({ onClose, open}) {
  const [tabValue, setTabValue] = useState('URL') 
  const [code, setCode] = useState();
  const setPix = useSetRecoilState(pixState);
  const history = useHistory();

  const handleClose = () => {
    onClose();
  };

  const parseCode = () => {  
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
        onClose()
        history.push('/play/' + play.key)
      }
    }  
  }

  const ActionButton = (action) => {
    if (tabValue === 'URL') {
      return <></>
    } else if (tabValue === 'Code') {
      return <Button onClick={ parseCode }>Parse Code</Button>
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
