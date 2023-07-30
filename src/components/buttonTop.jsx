import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/buttonTop.css';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import { useEffect, useState } from 'react';

function ButtonTop() {
    const [showButton, setShowButton] = useState(false)
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        const Scroll = () => {
            const scrollY = window.scrollY;
            setShowButton(scrollY > 100); // Muestra el botón cuando se haya desplazado 100px hacia abajo
        };
        window.addEventListener('scroll', Scroll);
        return () => {
            window.removeEventListener('scroll', Scroll);
        };
    }, []);
    return (
        showButton && (
                 <Button className="TopButton" onClick={ScrollToTop}><ArrowCircleUpTwoToneIcon /></Button>)
    )
}

export default ButtonTop;