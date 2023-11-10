import AppHeader from "@/components/layout/header";
import CardsMovie from "@/features/tv/components/cards-tvseries";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import "react-circular-progressbar/dist/styles.css";
import { tvHooks } from "@/features/tv/services/tv.hook";
import JumbotronSliders from "@/components/homepage/jumbotron-sliders";

export default async function SeriesPage() {
  const { queryClient } = tvHooks();

  return (
    <main className="relative">
      <AppHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <JumbotronSliders queryFn="series" queryKey={["trendingSeries"]} />
        <CardsMovie />
      </HydrationBoundary>
    </main>
  );
}
