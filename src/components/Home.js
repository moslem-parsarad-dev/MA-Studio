import React from "react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'animate.css';

const Home = () => {
  return (
  
      <div className="animate__animated animate__fadeInDown flex justify-center items-center my-10">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative flex justify-center items-center">
              <img className="rounded-xl" src="images/a1.jpg" />
              <p className="absolute text-[#ffffff] text-xl bottom-[10px] left-[10px]">
                We Design lorem ipsum
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-start items-center">
              <img className="rounded-xl" src="images/an1.jpg" />
              <p className="absolute text-[#ffffff] text-xl bottom-[10px] left-[10px]	">
                We Design lorem ipsum
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center items-center">
              <img className="rounded-xl" src="images/e1.jpg" />
              <p className="absolute text-[#ffffff] text-xl bottom-[10px] left-[10px]">
                We Design lorem ipsum
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center items-center">
              <img className="rounded-xl" src="images/e2.jpg" />
              <p className="absolute text-[#ffffff] text-xl bottom-[10px] left-[10px]">
                We Design lorem ipsum
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center items-center">
              <img className="rounded-xl" src="images/e3.jpg" />
              <p className="absolute text-[#ffffff] text-xl bottom-[10px] left-[10px]">
                We Design lorem ipsum
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center items-center">
              <img className="rounded-xl" src="images/u.jpg" />
              <p className="absolute text-[#ffffff] text-xl bottom-[10px] left-[10px]">
                We Design lorem ipsum
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
  );
};

export default Home;
