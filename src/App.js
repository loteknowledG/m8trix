
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './views/Dashboard'
import Play from './views/Play'
import Gallery from './views/Play/Gallery'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from 'recoil';


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
})

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={themeDark}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/playGallery">
              <Gallery />
            </Route>
            <Route path="/play">
              <Play />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
