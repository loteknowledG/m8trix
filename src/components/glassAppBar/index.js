import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import color from "color";

const GlassAppBar = styled(AppBar)(({c = '#ffffff', blur = 3, theme }) => ({
  backgroundColor: color(c).alpha(0.4).toString(),
  backgroundImage: `linear-gradient(to bottom right, ${color(c)
    .alpha(0.2)
    .toString()}, ${color(c).alpha(0).toString()})`,
  backdropFilter: `blur(${blur}px)`,
  boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
  borderLeft: `solid 1px ${color(c).alpha(0.3).toString()}`,
  borderTop: `solid 1px ${color(c).alpha(0.8).toString()}`,
  borderRadius: theme.spacing(2),
}));
export default GlassAppBar