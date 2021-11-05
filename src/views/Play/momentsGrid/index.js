import { useRecoilState } from 'recoil'
import { pixState } from '../../../atoms/pixState'
import { Container, ImageList, ImageListItem, TextField } from '@mui/material'

export const MomentsGrid = () => {

  const [pix, setPix] = useRecoilState(pixState);
  const path = window.location.pathname
  const key = path.substring(path.lastIndexOf('/') + 1)
  let pics = pix.filter((pic) => {
    if (pic.key === key)
       return pic
  })
  
  if (pics.length > 0)
    return (<Container >
      <TextField fullWidth label="Title" variant="standard" />
      <ImageList  >
        {pics[0].pix.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.src}`}
              srcSet={`${item.src}`}
              alt={item.id}
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