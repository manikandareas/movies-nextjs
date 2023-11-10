import { axiosInstances } from "@/common/lib/axios";
import {
  MovieCredits,
  MovieDetails,
  MovieImages,
  MovieSimilar,
  MoviesPopular,
  TMDBResponses,
  MoviesTopRated,
  MoviesTrending,
  MovieVideos,
} from "@/types";

interface PopularMoviesProps {
  page?: number | 1;
}
export const getMoviesPopular = async ({ page }: PopularMoviesProps) => {
  const response = await axiosInstances.get(`/movie/popular?page=${page || 1}`);
  return response.data as TMDBResponses<MoviesPopular[]>;
};

type TopRatedProps = {
  page?: number;
};
export const getMoviesTopRated = async ({ page }: TopRatedProps) => {
  const response = await axiosInstances.get(
    `/movie/top_rated?page=${page || 1}`
  );
  return response.data as TMDBResponses<MoviesTopRated[]>;
};

type TrendingMoviesProps = {
  time_window?: string | "day";
};
export const getMoviesTrending = async ({
  time_window,
}: TrendingMoviesProps) => {
  const response = await axiosInstances.get(
    `/trending/movie/${time_window || "day"}`
  );
  return response.data as TMDBResponses<MoviesTrending[]>;
};

type DetailsMoviesProps = {
  movie_id?: number;
};
export const geMovieDetails = async ({ movie_id }: DetailsMoviesProps) => {
  const movieDetails = await axiosInstances
    .get(`/movie/${movie_id}`)
    .then((res) => res.data as MovieDetails);

  const movieCredits = await axiosInstances
    .get(`/movie/${movie_id}/credits`)
    .then((res) => res.data as MovieCredits);

  const movieImages = await axiosInstances
    .get(`/movie/${movie_id}/images`)
    .then((res) => res.data as MovieImages);

  const movieVideos = await axiosInstances
    .get(`/movie/${movie_id}/videos`)
    .then((res) => res.data as MovieVideos);

  const movieSimilar = await axiosInstances
    .get(`/movie/${movie_id}/similar`)
    .then((res) => res.data as MovieSimilar);

  const response = {
    details: movieDetails,
    credits: movieCredits,
    images: movieImages,
    videos: movieVideos,
    similar: movieSimilar,
  };

  return response;
};
