import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Dashboard from './views/Dashboard'
import Play from './views/Play'
import Game from './views/Game'
import Plays from './views/Plays'
import Matrix from './views/Matrix'
import Tactics from './views/Tactics'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from 'recoil'
import Fluid from './components/Fluid'
import './css/scrollbar.css'

const themeDark = createTheme({
  typography: {
    fontFamily: '"Hack"',
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#261D45'
    },
    primary: {
      main: '#E26DFF',
      fontFace: 'Hack'
    },
    secondary: {
      main: '#CA7BFF'
    }
  },
  body: {
    height: '100%',
    margin: 0
  }
})

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={themeDark}>
        <CssBaseline />
        <Router basename="/">
          <Switch>
            <Route path="/game/:id">
              <Game />
              <Fluid />
            </Route>
            <Route path="/play">
              <Play />
              <Fluid />
            </Route>
            <Route path="/plays/:key">
              <Plays />
              <Fluid />
            </Route>
            <Route path="/matrix/:id">
              <Matrix />
              <Fluid />
            </Route>
            <Route path="/tactics/:id">
              <Tactics />
              <Fluid />
            </Route>
            <Route path="/">
              <Dashboard />
              <Fluid />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
