import React from 'react';
import { CardTariff } from '../card';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ui.scss';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { TariffData } from '../data';

export const SwiperTariff = () => {
    return (
        <Swiper
            id="tariff"
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 380,
                modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container">
            {TariffData.map((item, index) => (
                <SwiperSlide key={index}>
                    <CardTariff {...item} />
                </SwiperSlide>
            ))}
            <div className="arrows">
                <div className="swiper-button-prev slider-arrow" />
                <div className="swiper-button-next slider-arrow" />
            </div>

            <div className="slider-controler">
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    );
};
