import { useState }  from 'react'
import PropTypes from 'prop-types'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle,
  IconButton, SvgIcon, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom'

const CloseIcon = () => {
  return (
    <SvgIcon>
      <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </SvgIcon>
  )
}
export default function ImportDialog({ onClose, open}) {
  const [urlValue, setUrlValue] = useState()
  const [PS, setPS] = useState()
  const history = useHistory()

  const handleClose = () => {
    onClose();
  };

  const inloadAlbum = () => {
    onClose()
    if (PS === 'p')
      history.push('/playMatrix/' + urlValue)
    else if (PS === 's')
      history.push('/plays/' + urlValue)
  }

  const ActionButton = () => {
    return <Button  sx={{pointerEvents: 'auto'}} onClick={ inloadAlbum }>Inload</Button>
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
        <DialogTitle>Import a Play
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 11,
                color: (theme) => theme.palette.grey[500],
                pointerEvents: 'auto'
            }}>
              <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField 
            sx={{ 
              pointerEvents: 'auto',
              width:'100%' }} 
            id='standard-basic' 
            label='google Link-sharing' 
            variant='standard'
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
