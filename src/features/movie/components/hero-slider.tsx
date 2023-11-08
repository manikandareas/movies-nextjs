"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import HeroSliderContent from "./hero-content-slider";
import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "@/services/movies";

const HeroSlider = () => {
  const { data } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: () => getTrendingMovies({}),
  });

  return (
    <Swiper grabCursor={true}>
      {data?.results.map((movie) => (
        <SwiperSlide className="" key={movie.id}>
          <HeroSliderContent
            backdrop_path={movie.backdrop_path}
            name={movie.name}
            title={movie.title}
            overview={movie.overview}
            genres={movie.genre_ids}
            vote_average={movie.vote_average}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
