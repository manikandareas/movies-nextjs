import { getTrendingAll } from "@/services/all";
import { getMoviesPopular, getMoviesTopRated } from "@/services/movies";
import { getSeriesPopular, getSeriesTopRated } from "@/services/series";
import { QueryClient } from "@tanstack/react-query";

export const homeHooks = () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["trendingAll"],
    queryFn: () => getTrendingAll({}),
  });

  queryClient.prefetchQuery({
    queryKey: ["popularMovies"],
    queryFn: () => getMoviesPopular({}),
  });

  queryClient.prefetchQuery({
    queryKey: ["topRatedMovies"],
    queryFn: () => getMoviesTopRated({}),
  });

  queryClient.prefetchQuery({
    queryKey: ["popularSeries"],
    queryFn: () => getSeriesPopular({}),
  });

  queryClient.prefetchQuery({
    queryKey: ["topRatedSeries"],
    queryFn: () => getSeriesTopRated({}),
  });

  return {
    queryClient,
  };
};
