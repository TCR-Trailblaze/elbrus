"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface IPropsSwiper {
    slidePerView?: number;
    setCurrentData: (data: any) => void;
    data: any[];
    cardVariant?: "small" | "label";
    setPlayVideo: (data: any) => void;
}

const SliderCardSmall: React.FC<{
    item: { label: string; title: string; imageSrc: string };
}> = ({ item }) => {
    return (
        <div
            className="w-40 h-60 cursor-pointer rounded-sm p-3 bg-white flex flex-col justify-end leading-2 shadow-sm shadow-b-xl "
            style={{
                backgroundImage: `url(${item.imageSrc})`,
                objectFit: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <p className="uppercase text-white text-xs">{item.label}</p>
            <h1 className="font-bold uppercase text-white">{item.title}</h1>
        </div>
    );
};

const SliderCardLabel: React.FC<{
    item: { id: number; label: string; title: string; imageSrc: string };
}> = ({ item }) => {
    return (
        <div>
            <section
                className="w-full min-h-20 p-4 opacity-80 flex flex-col md:flex-row justify-between"
                style={{
                    backgroundImage: `url('/images/maps-con.png')`,
                    objectFit: "contain",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex space-x-4">
                    <p className="grit bg-[#F92424] w-10 h-10 flex justify-center items-center font-bold text-2xl text-white">
                        0{+item?.id + 1}
                    </p>
                    <section className="">
                        <h1 className="font-base text-black uppercase">
                            {item?.label}
                        </h1>
                        <h2 className="grit text-3xl md:text-[80px] font-bold text-black leading-[95%] uppercase">
                            {item?.title}
                        </h2>
                    </section>
                </div>
                <section className="text-right">
                    <p className="uppercase text-black text-xs">DATE TIME</p>
                    <h1 className="font-bold uppercase text-black">
                        COORNDINATES
                    </h1>
                </section>
            </section>
        </div>
    );
};

const SwiperCarousel: React.FC<IPropsSwiper> = ({
    setCurrentData,
    data,
    slidePerView,
    cardVariant = "small",
    setPlayVideo,
}) => {
    return (
        <Swiper
            loop
            modules={[Pagination]}
            slidesPerView={slidePerView}
            initialSlide={1}
            tabIndex={1}
            observer={true}
            observeParents={true}
            onSlideNextTransitionEnd={(slide) => {
                setPlayVideo(false);
                setCurrentData(data[slide.realIndex]);
            }}
            slideActiveClass="banner-active"
        >
            {data.map((item) => (
                <SwiperSlide key={item.id} className="">
                    {cardVariant === "small" ? (
                        <SliderCardSmall item={item} />
                    ) : (
                        <SliderCardLabel item={item} />
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperCarousel;
