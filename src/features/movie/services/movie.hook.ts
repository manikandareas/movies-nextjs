import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "@/services/movies";
import { QueryClient } from "@tanstack/react-query";

export const movieHooks = () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["trendingMovies"],
    queryFn: () => getTrendingMovies({}),
  });
  queryClient.prefetchQuery({
    queryKey: ["popularMovies"],
    queryFn: () => getPopularMovies({}),
  });

  queryClient.prefetchQuery({
    queryKey: ["topRatedMovies"],
    queryFn: () => getTopRatedMovies({}),
  });

  return {
    queryClient,
  };
};
