import AppHeader from "@/components/layout/header";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import "react-circular-progressbar/dist/styles.css";
import { movieHooks } from "@/features/movie/services/movie.hook";
import JumbotronSliders from "@/components/homepage/jumbotron-sliders";
import CardsSection from "@/components/homepage/cards-section";

export default async function MoviesPage() {
  const { queryClient } = movieHooks();

  return (
    <main className="relative">
      <AppHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <JumbotronSliders domain="movie" queryKey={["trendingMovies"]} />
        <CardsSection domain="movie" name="Movies" />
      </HydrationBoundary>
    </main>
  );
}
