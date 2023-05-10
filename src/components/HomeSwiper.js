import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import './HomeSwiperStyles.css';


import 'swiper/css';
import 'swiper/css/bundle';

import axios from 'axios';
import { useEffect, useState } from 'react';

function HomeSwiper() {
    const [swiperContent, setSwiperContent] = useState([{Title: 'Loading...', Subtitle: 'Loading...', ImageUrl: 'https://m.media-amazon.com/images/I/61XTd8EsYqL._AC_SX466_.jpg'}]);

    function fetchBannerData() {
      axios.get('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details')
      .then((response) => setSwiperContent(response.data.Details))
      .catch(console.log);
    }
  
    useEffect(() => {
      fetchBannerData();
    }, []);

  return (
        <div className='swiper-container'>
        <Swiper
            className='BannerImage'
            modules={[Navigation, Pagination]}
            pagination
            navigation
            slidesPerView={1}
            loop>
            {swiperContent.map(slide => {
                return (
                <SwiperSlide className='Slide' style={{ backgroundImage: `linear-gradient(to left, rgba(245, 246, 252, 0), rgb(41, 40, 39)), url(${slide.ImageUrl})`}}>
                        <h1 className='BannerText'>{slide.Title}</h1>
                        <p className='BannerText'>{slide.Subtitle}</p>
                </SwiperSlide>
                )
            })}
        </Swiper>
        </div>
  );
};

export default HomeSwiper;