import { getTrendingAll } from "@/services/all";
import { getPopularMovies, getTopRatedMovies } from "@/services/movies";
import { getPopularSeries, getTopRatedSeries } from "@/services/series";
import { QueryClient } from "@tanstack/react-query";

export const homeHooks = () => {
    const queryClient = new QueryClient();

    queryClient.prefetchQuery({
      queryKey: ["trendingAll"],
      queryFn: () => getTrendingAll({}),
    });
  
    queryClient.prefetchQuery({
      queryKey: ["popularMovies"],
      queryFn: () => getPopularMovies({}),
    });
  
    queryClient.prefetchQuery({
      queryKey: ["topRatedMovies"],
      queryFn: () => getTopRatedMovies({}),
    });
  
    queryClient.prefetchQuery({
      queryKey: ["popularSeries"],
      queryFn: () => getPopularSeries({}),
    });
  
    queryClient.prefetchQuery({
      queryKey: ["topRatedSeries"],
      queryFn: () => getTopRatedSeries({}),
    });

    return {
        queryClient
    }
}