import { axiosInstances } from "@/common/lib/axios";
import {
  PopularMovies,
  TMDBResponses,
  TopRatedMovies,
  TrendingMovies,
} from "@/types/tmdb";

interface PopularMoviesProps {
  page?: number | 1;
}
export const getPopularMovies = async ({ page }: PopularMoviesProps) => {
  const response = await axiosInstances.get(`/movie/popular?page=${page || 1}`);
  return response.data as TMDBResponses<PopularMovies[]>;
};

type TopRatedProps = {
  page?: number;
};
export const getTopRatedMovies = async ({ page }: TopRatedProps) => {
  const response = await axiosInstances.get(
    `/movie/top_rated?page=${page || 1}`
  );
  return response.data as TMDBResponses<TopRatedMovies[]>;
};

type TrendingMoviesProps = {
  time_window?: string | "day";
};
export const getTrendingMovies = async ({
  time_window,
}: TrendingMoviesProps) => {
  const response = await axiosInstances.get(
    `/trending/movie/${time_window || "day"}`
  );
  return response.data as TMDBResponses<TrendingMovies[]>;
};

export const getMovieDetails = () => {};
