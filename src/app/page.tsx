import AppHeader from "@/components/layout/header";
import CardsSlider from "@/features/home/components/cards-slider";
import HeroSlider from "@/features/home/components/hero-slider";
import { homeHooks } from "@/features/home/services/home.hook";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import "react-circular-progressbar/dist/styles.css";

export default async function Home() {
  const { queryClient } = homeHooks();

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