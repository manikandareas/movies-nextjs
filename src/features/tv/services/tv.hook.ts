import {
  getSeriesPopular,
  getSeriesTopRated,
  getSeriesTrending,
} from "@/services/series";
import { QueryClient } from "@tanstack/react-query";

export const tvHooks = () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["trendingSeries"],
    queryFn: () => getSeriesTrending({}),
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
