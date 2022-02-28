import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import color from "color"


export const GlassButton = styled(Button)(({c = '#261D45', blur = 3, theme }) => ({
  backgroundColor: color(c).alpha(0.4).toString(),
  backgroundImage: `linear-gradient(to bottom right, ${color(c)
    .alpha(0.2)
    .toString()}, ${color(c).alpha(0).toString()})`,
  backdropFilter: `blur(${blur}px)`,
  boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
  borderLeft: `solid 1px ${color(c).alpha(0.3).toString()}`,
  borderTop: `solid 1px ${color(c).alpha(0.8).toString()}`, 
  borderRadius: 17
}));

export default GlassButton