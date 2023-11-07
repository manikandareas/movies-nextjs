import AppHeader from "@/components/layout/header";
import CardsMovie from "@/features/tv/components/cards-tvseries";
import HeroSlider from "@/features/tv/components/hero-slider";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import "react-circular-progressbar/dist/styles.css";
import { tvHooks } from "@/features/tv/services/tv.hook";

export default async function MoviesPage() {
  const { queryClient } = tvHooks();

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
