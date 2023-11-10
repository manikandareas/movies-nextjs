import { axiosInstances } from "@/common/lib/axios";
import { TMDBResponses, TrendingAll } from "@/types";

type TrendingAllProps = {
  time_window?: string | "day";
};
export const getTrendingAll = async ({
  time_window = "day",
}: TrendingAllProps) => {
  const response = await axiosInstances.get(
    `/trending/all/${time_window || "day"}`
  );
  return response.data as TMDBResponses<TrendingAll[]>;
};
