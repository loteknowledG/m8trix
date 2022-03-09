import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Dashboard from './views/Dashboard'
import Play from './views/Play'
import Game from './views/Play/Game'
import List from './views/Play/List'
import Matrix from './views/Play/Matrix'
import M8trix from './views/Play/M8trix'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from 'recoil'
import Fluid from './components/Fluid'

// const useGlobalStyles = makeStyles({
//   "@global": {
//     body: {
//       backgroundColor: "tomato"
//     }
//   }
// });

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
        <Router>
          <Switch>
            <Route path="/game">
              <Game />
              <Fluid />
            </Route>
            <Route path="/play">
              <Play />
              <Fluid />
            </Route>
            <Route path="/playList">
              <List />
              <Fluid />
            </Route>
            <Route path="/matrix">
              <Matrix />
              <Fluid />
            </Route>
            <Route path="/m8trix">
              <M8trix />
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
