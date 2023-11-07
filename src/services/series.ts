import { axiosInstances } from "@/common/lib/axios";
import {
  PopularSeries,
  TMDBResponses,
  TopRatedSeries,
  TrendingSeries,
} from "@/types/tmdb";

interface PopularProps {
  page?: number | 1;
}
export const getPopularSeries = async ({ page }: PopularProps) => {
  const response = await axiosInstances.get(`/tv/popular?page=${page || 1}`);
  return response.data as TMDBResponses<PopularSeries[]>;
};

type TopRatedProps = {
  page?: number;
};
export const getTopRatedSeries = async ({ page }: TopRatedProps) => {
  const response = await axiosInstances.get(`/tv/top_rated?page=${page || 1}`);
  return response.data as TMDBResponses<TopRatedSeries[]>;
};

type TrendingSeriesProps = {
  time_window?: string | "day";
};
export const getTrendingSeries = async ({
  time_window,
}: TrendingSeriesProps) => {
  const response = await axiosInstances.get(
    `/trending/tv/${time_window || "day"}`
  );
  return response.data as TMDBResponses<TrendingSeries[]>;
};
