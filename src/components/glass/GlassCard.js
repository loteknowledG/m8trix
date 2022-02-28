import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import color from "color";

export const GlassCard = styled(Card)(({c = '#261D45', blur = 3, theme }) => ({
  backgroundColor: color(c).alpha(0.4).toString(),
  backgroundImage: `linear-gradient(to bottom right, ${color(c)
    .alpha(0.2)
    .toString()}, ${color(c).alpha(0).toString()})`,
  backdropFilter: `blur(${blur}px)`,
  boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
  border: '1px solid rgba( 255, 255, 255, 0.18 )',


    

    
  //border: `solid 3px ${color(c).alpha(0.5).toString()}`,
  // borderTop: `solid 1px ${color(c).alpha(0.8).toString()}`,
}));;
export default GlassCard