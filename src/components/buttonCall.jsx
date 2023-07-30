import '../styles/call.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Call(props) {
    return (
     
        <div className='callContent'><Button className="callTwo">{props.text}</Button></div>
      
  
    )
  }
  export default Call;