import AppHeader from "@/components/layout/header";
import CardsSlider from "@/features/home/components/cards-slider";
import HeroSlider from "@/features/home/components/hero-slider";

import { getTrendingAll } from "@/services/all";
import { getPopularMovies, getTopRatedMovies } from "@/services/movies";
import { getPopularSeries, getTopRatedSeries } from "@/services/series";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import "react-circular-progressbar/dist/styles.css";

export default async function Home() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["trendingAll"],
    queryFn: () => getTrendingAll({}),
  });

  queryClient.prefetchQuery({
    queryKey: ["popularMovies"],
    queryFn: () => getPopularMovies({}),
  });

  queryClient.prefetchQuery({
    queryKey: ["topRatedMovies"],
    queryFn: () => getTopRatedMovies({}),
  });

  queryClient.prefetchQuery({
    queryKey: ["popularSeries"],
    queryFn: () => getPopularSeries({}),
  });

  queryClient.prefetchQuery({
    queryKey: ["topRatedSeries"],
    queryFn: () => getTopRatedSeries({}),
  });

  return (
    <main className="relative">
      <AppHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HeroSlider />
        <CardsSlider />
      </HydrationBoundary>
    </main>
  );
}
