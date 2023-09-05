import React from 'react'
import { Streamcardinfo , userInfo} from '../../constants'
import Streamcard from '../../components/cards/Streamcard'
import Usercard from '../../components/cards/Usercard'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slide1 = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}

    navigation
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    breakpoints={{
        640: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 40
        }
    }}
    >
      {Streamcardinfo.map((info,index) => (
        <SwiperSlide key={index}>
             <Streamcard
              title={info.title}
              host={info.host}
              user={info.user}
              image={info.img}
              topic={info.topic}
              viewers={info.viewers}
              
            />
        
        </SwiperSlide>
            ))}

    </Swiper>
  )
}

export const Slide2 = () => {
   return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}

    navigation
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    breakpoints={{
        640: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        768:{
            slidesPerView: 5,
            spaceBetween: 80
        }
    }}
    >
        {userInfo.map((user , index) => (
            <SwiperSlide key={index}>
                 <Usercard name={user.name} followers={user.Followers} />
            </SwiperSlide>
      ))}
    </Swiper>
   )
}
