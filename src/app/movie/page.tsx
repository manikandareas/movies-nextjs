import AppHeader from "@/components/layout/header";
import CardsMovie from "@/features/movie/components/cards-movie";
import HeroSlider from "@/features/movie/components/hero-slider";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import "react-circular-progressbar/dist/styles.css";
import { movieHooks } from "@/features/movie/services/movie.hook";

export default async function MoviesPage() {
  const { queryClient } = movieHooks();

  return (
    <main className="relative">
      <AppHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HeroSlider />
        <CardsMovie />
      </HydrationBoundary>
    </main>
  );
}
