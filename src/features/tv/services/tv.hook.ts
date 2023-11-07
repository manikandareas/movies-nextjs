import {
  getPopularSeries,
  getTopRatedSeries,
  getTrendingSeries,
} from "@/services/series";
import { QueryClient } from "@tanstack/react-query";

export const tvHooks = () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["trendingSeries"],
    queryFn: () => getTrendingSeries({}),
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
    queryClient,
  };
};
