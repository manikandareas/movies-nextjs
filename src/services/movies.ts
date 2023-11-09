import { axiosInstances } from "@/common/lib/axios";
import {
  CreditsMovie,
  DetailsMovie,
  ImagesMovie,
  PopularMovies,
  TMDBResponses,
  TopRatedMovies,
  TrendingMovies,
  VideosMovie,
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

type DetailsMoviesProps = {
  movie_id?: number;
};
export const getMovieDetails = async ({ movie_id }: DetailsMoviesProps) => {
  const resDetailsMovie = await axiosInstances
    .get(`/movie/${movie_id}`)
    .then((res) => res.data as DetailsMovie);

  const resCreditsMovie = await axiosInstances
    .get(`/movie/${movie_id}/credits`)
    .then((res) => res.data as CreditsMovie);

  const resImagesMovie = await axiosInstances
    .get(`/movie/${movie_id}/images`)
    .then((res) => res.data as ImagesMovie);

  const resVideosMovie = await axiosInstances
    .get(`/movie/${movie_id}/videos`)
    .then((res) => res.data as VideosMovie);

  const resSimilarMovie = await axiosInstances
    .get(`/movie/${movie_id}/similar`)
    .then((res) => res.data);

  const response = {
    details: resDetailsMovie,
    credits: resCreditsMovie,
    images: resImagesMovie,
    videos: resVideosMovie,
    similar: resSimilarMovie,
  };

  return response;
};
