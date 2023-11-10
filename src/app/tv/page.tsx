import AppHeader from "@/components/layout/header";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import "react-circular-progressbar/dist/styles.css";
import { tvHooks } from "@/features/tv/services/tv.hook";
import JumbotronSliders from "@/components/homepage/jumbotron-sliders";
import CardsSection from "@/components/homepage/cards-section";

export default async function SeriesPage() {
  const { queryClient } = tvHooks();

  return (
    <main className="relative">
      <AppHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <JumbotronSliders queryFn="series" queryKey={["trendingSeries"]} />
        <CardsSection name="TV SERIES" domain="series" />
      </HydrationBoundary>
    </main>
  );
}
