import * as React from 'react'
import Box from '@mui/material/Box'
import SVGImage from '../images/img1.svg'
import SVGImageTwo from '../images/img2.svg'
import SVGImageThird from '../images/img3.svg'
import "../styles/citydetail.css"

export default function CityBanner(props){
console.log(props)
    return (
    
    <Box className="bannerCity"
    sx={{ minWidth: '100%', textAlign: 'right' }} >

    <Box className="bannerContent"><img className="titleImage" src={props.city.banner} alt={props.city.name} /></Box>
    <Box className="curveOne"><img src={SVGImageTwo} className="SVGcolor" alt="irregularForm"></img></Box>
    <Box className="curveTwo"><img src={SVGImageThird} alt="irregularForm2"></img></Box>
    <Box className="curveThird"><img src={SVGImage} alt="irregularForm3"></img></Box>
</Box>
)
}