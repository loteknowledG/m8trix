import { useRecoilState } from 'recoil'
import { playsState } from '../../../atoms/playsState'
import { Container, ImageList, ImageListItem, TextField } from '@mui/material'

export const MomentsGrid = () => {
  const [plays, setPlays] = useRecoilState(playsState);
  const path = window.location.pathname
  const key = path.substring(path.lastIndexOf('/') + 1)
  let play = plays.filter((play) => {
    if (play.key === key)
      return play
    else return null
  })
  
  if (play)
    return (<Container >
      <TextField required fullWidth defaultValue="Title" label="Required" variant="standard" />
      <ImageList  >
        {play[0].moments.map((moment) => (
          <ImageListItem key={moment.id}>
            <img
              src={`${moment.src}`}
              srcSet={`${moment.src}`}
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