import { useState }  from 'react'
import { useRecoilState } from 'recoil'
import apiKeyState from '../../../../atoms/apiKey'
import PropTypes from 'prop-types'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import { playlistState } from '../../../../atoms/playlistState'
import { useHistory } from 'react-router-dom'


export default function ImportDialog({ onClose, open}) {
  const [urlValue, setUrlValue] = useState()
  const [PS, setPS] = useState()
  const [apiKey, setApiKey] = useRecoilState(apiKeyState)

  const history = useHistory()

  const handleClose = () => {
    onClose();
  };

  const inloadAlbum = () => {
    onClose()
    if (PS === 'p')
      history.push('/playMatrix/' + urlValue)
    else if (PS === 's')
      history.push('/playList/' + urlValue)
  }

  const ActionButton = () => {
    return <Button onClick={ inloadAlbum }>Inload</Button>
  }

  const handleUrlChange = (newValue) => {
    newValue = newValue.replace('/edit?usp=sharing', '')
    const getLastItem = newValue.substring(newValue.lastIndexOf('/') + 1)
    if (newValue.indexOf('photos') > -1)   
      setPS('p')
    else if (newValue.indexOf('spreadsheets') > -1) 
      setPS('s')
    setUrlValue(getLastItem)
  }

  return (
    <Dialog onClose={ handleClose } open={ open }>
      <DialogTitle>Import a Play</DialogTitle>
      <DialogContent>
        <TextField 
          sx={{ width:'100%' }} 
          id="standard-basic" 
          label="google Link-sharing" 
          variant="standard"
          onChange={ (event) => handleUrlChange(event.target.value) } 
        />
      </DialogContent>
      <DialogActions>
        <ActionButton />
      </DialogActions>
    </Dialog>
  )
}

ImportDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
