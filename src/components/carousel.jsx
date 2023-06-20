import { ThemeProvider } from '@mui/material/styles';
import Theme from './themeConfig';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/carousel.css';
import Singapur from '../images/singapur.jpg';
import India from '../images/taj-mahal.jpg';
import Maldivas from '../images/Maldives.jpg';
import HongKong from '../images/HongKong.jpg';
import Rio from '../images/RioDeJaneiro.jpg';
import Mexico from '../images/ciudadDeMexicojpg.jpg';
import Margarita from '../images/Margaritas.jpg';
import BA from '../images/buenosAires.jpg';
import Ibiza from '../images/ibiza.jpg';
import Madrid from '../images/madrid.jpg';
import Munich from '../images/munich.jpg';
import Paris from '../images/paris.jpg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Typography } from '@mui/material';
import { Palette } from '@mui/icons-material';

export default function Carousel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <ThemeProvider theme={Theme.palette}>
                <div className='carouselContain'>
                    <div className='carouselTittle'>
                        <Typography variant="h2" color="primary.dark">Popular MYtineraries</Typography>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <div className='slide-item'>
                                <div className="geometricA"></div>
                                <div className="geometricB"></div>
                                <div className="title-slide-item">Nigth City Tour</div>
                                <div className="subtitle-slide-item">Mexico: Mexico City</div>
                                <img alt="Mexico City" src={Mexico} />
                            </div>
                            <div className='slide-item'>
                                <div className="geometricA"></div>
                                <div className="geometricB"></div>
                                <div className="title-slide-item">Meet the Redentor Crist</div>
                                <div className="subtitle-slide-item">Brasil: Rio of Janeiro</div>
                                <img alt="Redentor Crist" src={Rio} />
                            </div>

                            <div className='slide-item'>
                                <div className="geometricA"></div>
                                <div className="geometricB"></div>
                                <div className="title-slide-item">Enjoy The Margarita Island</div>
                                <div className="subtitle-slide-item">Venezuela: New Spart</div>
                                <img alt="Margarita Island Venezuela" src={Margarita} />
                            </div>
                            <div className='slide-item'>
                                <div className="geometricA"></div>
                                <div className="geometricB"></div>
                                <div className="title-slide-item">Nigth In Madero Port</div>
                                <div className="subtitle-slide-item">Argentina: Buenos Aires</div>
                                <img alt="Madero Port Buenos Aires" src={BA} />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='slide-item'>
                                <div className="geometricA"></div>
                                <div className="geometricB"></div>
                                <div className="title-slide-item">Nigth City Tour</div>
                                <div className="subtitle-slide-item">Singapur: Singapur</div>
                                <img alt="Singapur" src={Singapur} />
                            </div>
                            <div className='slide-item'>
                                <div className="geometricA"></div>
                                <div className="geometricB"></div>
                                <div className="title-slide-item">Enjoy The Beach</div>
                                <div className="subtitle-slide-item">Maldives Islands: Male</div>
                                <img alt="Maldives Islands" src={Maldivas} />
                            </div>
                            <div className='slide-item'>
                                <div className="geometricA"></div>
                                <div className="geometricB"></div>
                                <div className="title-slide-item">Visit The Taj Mahal</div>
                                <div className="subtitle-slide-item">India: Agra</div>
                                <img alt="Thag Majal" src={India} />
                            </div>
                            <div className='slide-item'>
                                <div className="geometricA"></div>
                                <div className="geometricB"></div>
                                <div className="title-slide-item">Nigth City Tour</div>
                                <div className="subtitle-slide-item">China:Hong Kong</div>
                                <img alt="Hong Kong" src={HongKong} />
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                        <div className='slide-item'>
                                <div className="geometricA"></div>
                                <div className="geometricB"></div>
                                <div className="title-slide-item">Nigth City Tour</div>
                                <div className="subtitle-slide-item">Germany: Munich</div>
                                <img alt="imagen Munich" src={Munich} />
                            </div>
                            <div className='slide-item'>
                                <div className="geometricA"></div>
                                <div className="geometricB"></div>
                                <div className="title-slide-item">City Tour</div>
                                <div className="subtitle-slide-item">Espain: Madrid</div>
                                <img alt="imagen Madrid" src={Madrid} />
                            </div>
                            
                            <div className='slide-item'>
                                <div className="geometricA"></div>
                                <div className="geometricB"></div>
                                <div className="title-slide-item">Enjoy Ibiza</div>
                                <div className="subtitle-slide-item">Espain: Ibiza</div>
                                <img alt="imagen Ibiza" src={Ibiza} />
                            </div>
                            <div className='slide-item'>
                                <div className="geometricA"></div>
                                <div className="geometricB"></div>
                                <div className="title-slide-item">Nigth at The Eiffel Tower</div>
                                <div className="subtitle-slide-item">France: Paris</div>
                                <img alt="imagen Paris" src={Paris} />
                            </div>
                        </SwiperSlide>


                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>


                </div>
            </ThemeProvider>
        </>
    );
}
