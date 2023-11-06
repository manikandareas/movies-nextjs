"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import HeroSliderContent from "./hero-content-slider";
import { getTrendingAll } from "@/services/all";
import { useQuery } from "@tanstack/react-query";

const HeroSlider = () => {
  const { data } = useQuery({
    queryKey: ["trendingAll"],
    queryFn: () => getTrendingAll({}),
  });

  return (
    <Swiper loop={true} grabCursor={true}>
      {data?.results.map((movie) => (
        <SwiperSlide className="" key={movie.id}>
          <HeroSliderContent
            backdrop_path={movie.backdrop_path}
            name={movie.name}
            title={movie.title}
            overview={movie.overview}
            vote_average={movie.vote_average}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
