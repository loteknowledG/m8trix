import { useRecoilState } from 'recoil'
import { playsState } from '../../../atoms/playsState'
import { Container, ImageList, ImageListItem, TextField } from '@mui/material'

export const MomentsGrid = () => {
  const [plays, setPlays] = useRecoilState(playsState)
  const path = window.location.pathname
  const key = path.substring(path.lastIndexOf('/') + 1)
  const play = plays.find(play => play.key === key)
 
  if (play)
    return (<Container
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required fullWidth defaultValue="Title" label="Required" variant="standard" />
      <ImageList variant="woven" cols={2} gap={1}>
      
      {play.moments.slice(0, 10).map((moment, idx) => (
        <ImageListItem  key={moment.id}>
            <img
              src={`${moment.img}?w=164&h=164&fit=crop&auto=format`}
              alt={moment.id}
              loading="lazy" 
            />
        </ImageListItem>
      ))}
      </ImageList>
    </Container>)
  else 
    return (<></>)
}
export default MomentsGrid