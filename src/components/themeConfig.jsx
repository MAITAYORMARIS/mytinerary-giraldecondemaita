import {createTheme} from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { amber } from '@mui/material/colors';
import { lightBlue} from '@mui/material/colors';
import { green} from '@mui/material/colors';


const theme = createTheme({
palette:{
    primary:{
        main: '#ff6d00',
        light: orange[200],
        dark:orange[900],
    },
    secondary:{
        main: blue[600],
        light: blue[200],
        dark:blue[900],
    },
    warning:{
        main: amber[300],
        light: amber[200],
        dark:amber[600],
    },
    info:{
        main: lightBlue[300],
        light: lightBlue[100],
        dark:lightBlue[700],
    },
    success:{
        main: green[400],
        light: green[200],
        dark:green[700],
    },
   
},
typography:{
    fontFamily:["'Nanum Gothic', sans-serif"],
    fontSize:20,
    h2:{
        fontFamily:["'Mr Dafoe', cursive"],
        letterSpacing:"0.02em",
        fontSize:"3rem", 
        '@media (max-width:600px)': {
            fontSize: '2.5rem',
          },
         
          '@media (min-width:1280px)': {
            fontSize: '4rem',
          }, 
    },
    h3:{
        fontFamily:["'Fira Sans', sans-serif"],
        letterSpacing:"0.03em",
        lineHeight:1.6,
        fontWeight:600, 
        fontSize:"2.5rem", 
        '@media (max-width:600px)': {
            fontSize: '1.03rem',
          },
          '@media (min-width:601px) and (max-width:960px)': {
            fontSize: '1.8rem',
          }, 
          '@media (min-width:1280px)': {
            fontSize: '2.85rem',
          },     
       
},
    h4:{
        fontFamily:["'Saira Extra Condensed', sans-serif"],
        lineHeight:1.1,
        fontSize:'2rem',
        '@media (max-width:600px)': {
            fontSize: '1.2rem',
          },
          '@media (min-width:1280px)': {
            fontSize: '2.5rem',
          },
    }

}
});

export default theme;