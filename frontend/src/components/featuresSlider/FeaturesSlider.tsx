import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import LandingCardChat from '../landingCardChat/LandingCardChat'
import LandingCardMsj from '../landingCardMsj/LandingCardMsj'
import LandingCardCalls from '../landingCardCalls/LandingCardCalls'

const FeaturesSlider = () => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation>
      <SwiperSlide>
        <LandingCardMsj />
      </SwiperSlide>
      <SwiperSlide>
        <LandingCardCalls />
      </SwiperSlide>
      <SwiperSlide>
        <LandingCardChat />
      </SwiperSlide>
    </Swiper>
  )
}
export default FeaturesSlider
