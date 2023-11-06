import axios from "axios";

export const axiosInstances = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
  },
});
