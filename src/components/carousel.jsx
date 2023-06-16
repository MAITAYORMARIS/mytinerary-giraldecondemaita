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

export default function Carousel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <div className='carouselContain'>
                <div className='carouselTittle'>Popular MYtineraries</div>
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
                    <div>Titulo del Carousel</div>
                    <SwiperSlide>
                        <div className='slide-item'>
                            <div className="geometricA"></div>
                            <div className="geometricB"></div>
                            <div className="title-slide-item">Rio de Janeiro</div>
                            <div className="subtitle-slide-item">Brasil</div>
                            <img alt="Redentor Crist" src={Rio} />
                        </div>
                        <div className='slide-item'>
                            <div className="geometricA"></div>
                            <div className="geometricB"></div>

                            <div className="title-slide-item">Mexico City</div>
                            <div className="subtitle-slide-item">Mexico</div>
                            <img alt="Mexico City" src={Mexico} />
                        </div>
                        <div className='slide-item'>
                            <div className="geometricA"></div>
                            <div className="geometricB"></div>
                            <div className="title-slide-item">The Asuntion</div>
                            <div className="subtitle-slide-item">Venezuela</div>
                            <img alt="Margarita Island Venezuela" src={Margarita} />
                        </div>
                        <div className='slide-item'>
                            <div className="geometricA"></div>
                            <div className="geometricB"></div>
                            <div className="title-slide-item">Buenos Aires</div>
                            <div className="subtitle-slide-item">Argentina</div>
                            <img alt="Madero Port Buenos Aires" src={BA} />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slide-item'>
                            <div className="geometricA"></div>
                            <div className="geometricB"></div>
                            <div className="title-slide-item">Singapur</div>
                            <div className="subtitle-slide-item">Singapur</div>
                            <img alt="Singapur" src={Singapur} />
                        </div>
                        <div className='slide-item'>
                            <div className="geometricA"></div>
                            <div className="geometricB"></div>
                            <div className="title-slide-item">Male</div>
                            <div className="subtitle-slide-item">Maldives Islands</div>
                            <img alt="Maldives Islands" src={Maldivas} />
                        </div>
                        <div className='slide-item'>
                            <div className="geometricA"></div>
                            <div className="geometricB"></div>
                            <div className="title-slide-item">Hong Kong</div>
                            <div className="subtitle-slide-item">China</div>
                            <img alt="Hong Kong" src={HongKong} />
                        </div>
                        <div className='slide-item'>
                            <div className="geometricA"></div>
                            <div className="geometricB"></div>
                            <div className="title-slide-item">Agra</div>
                            <div className="subtitle-slide-item">India</div>
                            <img alt="Thag Majal" src={India} />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slide-item'>
                            <div className="geometricA"></div>
                            <div className="geometricB"></div>
                            <div className="title-slide-item">Madrid</div>
                            <div className="subtitle-slide-item">Espain</div>
                            <img alt="imagen Madrid" src={Madrid} />
                        </div>
                        <div className='slide-item'>
                            <div className="geometricA"></div>
                            <div className="geometricB"></div>
                            <div className="title-slide-item">Munich</div>
                            <div className="subtitle-slide-item">Germany</div>
                            <img alt="imagen Munich" src={Munich} />
                        </div>
                        <div className='slide-item'>
                            <div className="geometricA"></div>
                            <div className="geometricB"></div>
                            <div className="title-slide-item">Ibiza</div>
                            <div className="subtitle-slide-item">Espain</div>
                            <img alt="imagen Ibiza" src={Ibiza} />
                        </div>
                        <div className='slide-item'>
                            <div className="geometricA"></div>
                            <div className="geometricB"></div>
                            <div className="title-slide-item">Paris</div>
                            <div className="subtitle-slide-item">France</div>
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

        </>
    );
}
