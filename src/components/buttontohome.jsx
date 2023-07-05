import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/buttonBack.css';
import FastRewindTwoToneIcon from '@mui/icons-material/FastRewindTwoTone';

function ButtonToHome(){
return(
    <Button bsPrefix="btn" as={Link} to='/cities'><FastRewindTwoToneIcon /></Button>
)
}

export default ButtonToHome;