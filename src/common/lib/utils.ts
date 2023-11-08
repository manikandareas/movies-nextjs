import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { movieGenres, seriesGenres } from "../mock/genres";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToMaxLengthDescription(
  description: string,
  maxLength: number
) {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "...";
  }
  return description;
}

export const getTitleWithIndex = (index: number) => {
  switch (index) {
    case 0:
      return "Popular Movies";
    case 1:
      return "Popular Series";
    case 2:
      return "Top Rated Movies";
    case 3:
      return "Top Rated Series";
    default:
      return "";
  }
};

export const getMovieGenreById = (id: number) => {
  for (const genre of movieGenres) {
    if (genre.id === id) {
      return genre.name;
    }
  }
};
export const getSeriesGenreById = (id: number) => {
  for (const genre of seriesGenres) {
    if (genre.id === id) {
      return genre.name;
    }
  }
};
