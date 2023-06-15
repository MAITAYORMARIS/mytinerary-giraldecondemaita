import '../styles/welcome.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

function Welcome(){
return (
    <div className="welcome">
        <Button className='call' as={Link} to="/cities" variant="contained" endIcon={<SendIcon />}>
        Here We Go!
      </Button>
        <h1>Aca va la Hero Image</h1>

    </div>
)
}
export default Welcome;