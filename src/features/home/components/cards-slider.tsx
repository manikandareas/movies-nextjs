"use client";
import React from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import CardSliderContainer from "./card-slider-container";
import { getPopularMovies, getTopRatedMovies } from "@/services/movies";
import { getPopularSeries, getTopRatedSeries } from "@/services/series";

const getTitleFromIndex = (index: number) => {
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

const CardsSlider = () => {
  const results = useQueries({
    queries: [
      { queryKey: ["popularMovies"], queryFn: () => getPopularMovies({}) },
      { queryKey: ["popularSeries"], queryFn: () => getPopularSeries({}) },
      { queryKey: ["topRatedMovies"], queryFn: () => getTopRatedMovies({}) },
      { queryKey: ["topRatedSeries"], queryFn: () => getTopRatedSeries({}) },
    ],
  });

  return (
    <section className="w-screen dark:bg-black mb-10 flex-col gap-10">
      {results.map(
        (result, idx) =>
          result.data?.results && (
            <CardSliderContainer
              key={idx}
              data={result.data.results}
              title={getTitleFromIndex(idx)}
            />
          )
      )}
    </section>
  );
};

export default CardsSlider;
