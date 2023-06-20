import '../styles/welcome.css';
// import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import Banner from '../images/banner Hero.png'
import { Typography } from '@mui/material';

function Welcome() {
  return (
    <>
      <div className="welcome">
        <img src={Banner} alt="banner terra"></img>
      </div>
      <div className='textBanner'><Typography variant="h3">Find your Perfect Trip,
        designed by insiders who know and love their cities!</Typography></div>


      <div><Button bsPrefix="call" as={Link} to='/cities'>Yes,Let's Go!!</Button>{''}</div>
      <div className='subtContent'><Typography variant="h4">Do you dare to a new adventure?</Typography></div>
    </>

  )
}
export default Welcome;