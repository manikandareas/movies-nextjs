import { getMovieDetails } from "@/services/movies";
import { getSeriesDetails } from "@/services/series";
import { useQuery } from "@tanstack/react-query";

export const useSeriesDetails = (id: number) => {
  const result = useQuery({
    queryKey: ["series", id],
    queryFn: () => getSeriesDetails({ series_id: id }),
  });
  return result;
};

export const useMovieDetails = (id: number) => {
  const result = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails({ movie_id: id }),
  });
  return result;
};
