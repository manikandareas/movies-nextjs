"use client";
import {
  PopularMovies,
  PopularSeries,
  TopRatedMovies,
  TopRatedSeries,
} from "@/types/tmdb";
import { Swiper, SwiperSlide } from "swiper/react";
import CardSliderContent from "./card-slider-content";
import { useEffect, useState } from "react";

const CardSliderContainer = ({
  data,
  title,
}: {
  data: PopularMovies[] | TopRatedMovies[] | PopularSeries[] | TopRatedSeries[];
  title: string;
}) => {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <article className="w-full px-4 flex flex-col gap-8 md:max-w-7xl mx-auto">
      <div className="flex flex-col items-start px-4 md:px-0">
        <h1 className="uppercase font-bold text-2xl ">{title}</h1>
        <span className="w-24 h-1 bg-red-600" />
      </div>
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={windowSize.innerWidth < 762 ? 2 : 5}
        style={{ width: "100%", height: "max-content" }}
      >
        {data.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="md:h-[27rem] md:w-[17rem]"
            style={{ width: "100%", height: "27rem" }}
          >
            <CardSliderContent
              poster_path={movie.poster_path}
              name={movie.name}
              overview={movie.overview}
              vote_average={movie.vote_average}
              title={movie.title}
              date={movie.release_date || movie.first_air_date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default CardSliderContainer;
