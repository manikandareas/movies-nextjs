import JumbotronLoading from "@/components/homepage/jumbotron-loading";
import JumbotronSliders from "@/components/homepage/jumbotron-sliders";
import AppHeader from "@/components/layout/header";
import CardsSlider from "@/features/home/components/cards-slider";
import { homeHooks } from "@/features/home/services/home.hook";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";

import "react-circular-progressbar/dist/styles.css";
import Loading from "./loading";

export default function Home() {
  const { queryClient } = homeHooks();

  return (
    <main className="relative">
      <AppHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<Loading />}>
          <JumbotronSliders domain="movie" queryKey={["trendingMovies"]} />
        </Suspense>
        <CardsSlider />
      </HydrationBoundary>
    </main>
  );
}
