import { getListsMoviesByQuery } from "@/services/movies";
import { getListsSeriesByQuery } from "@/services/series";
import { useQuery } from "@tanstack/react-query";

export const useSearchMovie = (query: string) => {
  return useQuery({
    queryKey: ["movie", query],
    queryFn: () => getListsMoviesByQuery(query || ""),
  });
};

export const useSearchSeries = (query: string) => {
  return useQuery({
    queryKey: ["series", query],
    queryFn: () => getListsSeriesByQuery(query || ""),
  });
};
