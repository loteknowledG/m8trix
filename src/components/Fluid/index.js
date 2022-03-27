import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
  iframe: {
    // display: 'block',
    border: 'none',         /* Reset default border */
    width: '100vw',
    height: '100vh',
    position:'fixed', 
    top:'0px',
    zIndex: -1,
    pointerEvents:'auto'
 }
}))

export const Fluid = () => {
    const classes = useStyles();
    return (
        <iframe title="fluid" className={classes.iframe} src="https://loteknowledg.github.io/m8trix/WebGL-Fluid-Simulation/" height="100vh"></iframe>
    )
}
export default Fluid