import '../styles/welcome.css';
// import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import Banner from '../images/banner Hero.png'

function Welcome() {
  return (
    <div className="welcome">
      <img src={Banner} alt="home"></img>
      <p>Find your Perfect Trip</p>
      <div className='wrap'><Button bsPrefix="call" as={Link} to='/cities'>Yes,Let's Go!!</Button>{''}</div>
    </div>
  )
}
export default Welcome;