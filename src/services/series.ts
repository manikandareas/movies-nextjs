import { axiosInstances } from "@/common/lib/axios";
import {
  SeriesPopular,
  SeriesCredits,
  SeriesDetails,
  SeriesImages,
  SeriesSimilar,
  SeriesVideos,
  TMDBResponses,
  SeriesTopRated,
  SeriesTrending,
} from "@/types";

interface PopularProps {
  page?: number | 1;
}
export const getSeriesPopular = async ({ page }: PopularProps) => {
  const response = await axiosInstances.get(`/tv/popular?page=${page || 1}`);
  return response.data as TMDBResponses<SeriesPopular[]>;
};

type TopRatedProps = {
  page?: number;
};
export const getSeriesTopRated = async ({ page }: TopRatedProps) => {
  const response = await axiosInstances.get(`/tv/top_rated?page=${page || 1}`);
  return response.data as TMDBResponses<SeriesTopRated[]>;
};

type TrendingSeriesProps = {
  time_window?: string | "day";
};
export const getSeriesTrending = async ({
  time_window,
}: TrendingSeriesProps) => {
  const response = await axiosInstances.get(
    `/trending/tv/${time_window || "day"}`
  );
  return response.data as TMDBResponses<SeriesTrending[]>;
};

type DetailsSeriesProps = {
  series_id?: number;
};
export const getSeriesDetails = async ({ series_id }: DetailsSeriesProps) => {
  const seriesDetails = await axiosInstances
    .get(`/tv/${series_id}`)
    .then((res) => res.data as SeriesDetails);

  const seriesCredits = await axiosInstances
    .get(`/tv/${series_id}/credits`)
    .then((res) => res.data as SeriesCredits);

  const seriesImages = await axiosInstances
    .get(`/tv/${series_id}/images`)
    .then((res) => res.data as SeriesImages);

  const seriesVideos = await axiosInstances
    .get(`/tv/${series_id}/videos`)
    .then((res) => res.data as SeriesVideos);

  const seriesSimilar = await axiosInstances
    .get(`/tv/${series_id}/similar`)
    .then((res) => res.data as SeriesSimilar);

  const response = {
    details: seriesDetails,
    credits: seriesCredits,
    images: seriesImages,
    videos: seriesVideos,
    similar: seriesSimilar,
  };
  return response;
};
