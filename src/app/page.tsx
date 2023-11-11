import JumbotronSliders from "@/components/homepage/jumbotron-sliders";
import AppHeader from "@/components/layout/header";
import CardsSlider from "@/features/home/components/cards-slider";
import { homeHooks } from "@/features/home/services/home.hook";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import "react-circular-progressbar/dist/styles.css";

export default function Home() {
  const { queryClient } = homeHooks();

  return (
    <main className="relative">
      <AppHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <JumbotronSliders domain="movie" queryKey={["trendingMovies"]} />
        <CardsSlider />
      </HydrationBoundary>
    </main>
  );
}
