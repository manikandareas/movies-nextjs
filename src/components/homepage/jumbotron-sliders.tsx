"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import JumbotronSlider from "./jumbotron-slider";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getTrendingAll } from "@/services/all";
import { getMoviesTrending } from "@/services/movies";
import { getSeriesTrending } from "@/services/series";
import JumbotronLoading from "./jumbotron-loading";

type Props = {
  domain: "all" | "movie" | "series";
  queryKey: ["trendingAll"] | ["trendingMovies"] | ["trendingSeries"];
};

function getCorrectQueryFn(str: string) {
  switch (str) {
    case "all":
      return () => getTrendingAll({});
    case "movie":
      return () => getMoviesTrending({});
    case "series":
      return () => getSeriesTrending({});
    default:
      break;
  }
}

const JumbotronSliders = (props: Props) => {
  const { domain, queryKey } = props;

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: getCorrectQueryFn(domain),
    initialData: queryClient.getQueryData(queryKey),
  });

  return (
    <Swiper grabCursor={true}>
      {data?.results.map((movie) => (
        <SwiperSlide className="" key={movie.id}>
          <JumbotronSlider
            backdrop_path={movie.backdrop_path}
            name={movie.name}
            title={movie.title}
            genres={movie.genre_ids}
            overview={movie.overview}
            vote_average={movie.vote_average}
            domain={domain}
            movieId={movie.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default JumbotronSliders;
