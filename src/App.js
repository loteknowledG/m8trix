
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import './App.css';
import TopAppBar from './components/topAppBar'
import BottomAppBar from './components/bottomAppBar'
import Headroom from 'react-headroom'
import Dashboard from './views/Dashboard'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/">
            <Dashboard />
          </Route>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
