import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Banner.css"; // For custom styles

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.avif";
import useAuth from "../../Hooks/useAuth";

const Banner = () => {
  const { user } = useAuth();

  const sliderData = [
    {
      image: banner1,
    },
    { image: banner2 },
    { image: banner3 },
    { image: banner4 },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      className="mySwiper shadow-black"
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="banner-slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
           
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
