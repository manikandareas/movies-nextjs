import { getMoviesPopular, getMoviesTopRated } from "@/services/movies";
import { getSeriesPopular, getSeriesTopRated } from "@/services/series";
import { useQueries } from "@tanstack/react-query";

export const useMoviesCard = () => {
  const result = useQueries({
    queries: [
      { queryKey: ["popularMovies"], queryFn: () => getMoviesPopular({}) },
      { queryKey: ["topRatedMovies"], queryFn: () => getMoviesTopRated({}) },
    ],
  });
  return result;
};
export const useSeriesCard = () => {
  const result = useQueries({
    queries: [
      { queryKey: ["popularSeries"], queryFn: () => getSeriesPopular({}) },
      { queryKey: ["topRatedSeries"], queryFn: () => getSeriesTopRated({}) },
    ],
  });
  return result;
};
