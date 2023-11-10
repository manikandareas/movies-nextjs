import AppHeader from "@/components/layout/header";
import CardsMovie from "@/features/movie/components/cards-movie";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import "react-circular-progressbar/dist/styles.css";
import { movieHooks } from "@/features/movie/services/movie.hook";
import JumbotronSliders from "@/components/homepage/jumbotron-sliders";

export default async function MoviesPage() {
  const { queryClient } = movieHooks();

  return (
    <main className="relative">
      <AppHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <JumbotronSliders queryFn="movie" queryKey={["trendingMovies"]} />
        <CardsMovie />
      </HydrationBoundary>
    </main>
  );
}
