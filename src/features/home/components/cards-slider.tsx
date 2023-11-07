"use client";
import React from "react";
import { useQueries } from "@tanstack/react-query";
import CardSliderContainer from "./card-slider-container";
import { getPopularMovies, getTopRatedMovies } from "@/services/movies";
import { getPopularSeries, getTopRatedSeries } from "@/services/series";
import { getTitleWithIndex } from "@/common/lib/utils";

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
    <section className="w-screen dark:bg-black mb-10 flex-col">
      {results.map(
        (result, idx) =>
          result.data?.results && (
            <CardSliderContainer
              key={idx}
              data={result.data.results}
              title={getTitleWithIndex(idx)}
            />
          )
      )}
    </section>
  );
};

export default CardsSlider;
