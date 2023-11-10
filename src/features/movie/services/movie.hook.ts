import {
  getMoviesPopular,
  getMoviesTopRated,
  getMoviesTrending,
} from "@/services/movies";
import { QueryClient } from "@tanstack/react-query";

export const movieHooks = () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["trendingMovies"],
    queryFn: () => getMoviesTrending({}),
  });
  queryClient.prefetchQuery({
    queryKey: ["popularMovies"],
    queryFn: () => getMoviesPopular({}),
  });

  queryClient.prefetchQuery({
    queryKey: ["topRatedMovies"],
    queryFn: () => getMoviesTopRated({}),
  });

  return {
    queryClient,
  };
};
