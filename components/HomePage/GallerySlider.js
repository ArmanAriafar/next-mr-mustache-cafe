import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../public/Slides/img1.jpg";
import img2 from "../../public/Slides/img2.png";
import img3 from "../../public/Slides/img3.png";
import img4 from "../../public/Slides/img4.png";
import img5 from "../../public/Slides/img5.png";
import img6 from "../../public/Slides/img6.png";
import img7 from "../../public/Slides/img7.png";

import "swiper/css";
import "swiper/css/pagination";

import { Parallax, Autoplay } from "swiper";

export default function GallerySlider() {
    return (
        <>
            <Swiper
                speed={4000}
                slidesPerView={1}
                spaceBetween={1}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                modules={[Parallax, Autoplay]}
                parallax={true}
                loop={true}
            >
                <SwiperSlide>
                    <img
                        src="/Slides/img1.jpg"
                        alt="img1"
                        data-swiper-parallax="-100"
                        className="min-w-[200px]"
                    />
                    <img
                        src="/Slides/img2.png"
                        alt="img2"
                        data-swiper-parallax="-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Slides/img3.png"
                        alt="img3"
                        data-swiper-parallax="-100"
                        className="min-w-[200px]"
                    />
                    <img
                        src="/Slides/img4.png"
                        alt="img4"
                        data-swiper-parallax="-200"
                        className="min-w-[350px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Slides/img5.png"
                        alt="img5"
                        data-swiper-parallax="-100"
                        className="min-w-[200px]"
                    />
                    <img
                        src="/Slides/img6.png"
                        alt="img6"
                        data-swiper-parallax="-200"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Slides/img7.png"
                        alt="img7"
                        data-swiper-parallax="-300"
                        className="max-w-[250px]"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
