"use client";

import { useState } from "react";
import CardsItem from "./cards-item";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { buttonVariants } from "@/components/ui/button";
import { useMoviesCard, useSeriesCard } from "./cards.hook";

const CardsSection = ({
  domain,
  name,
}: {
  domain: "movie" | "series";
  name: string;
}) => {
  const results = domain === "movie" ? useMoviesCard() : useSeriesCard();

  const [activeTab, setActiveTab] = useState<"popular" | "topRated">("popular");

  const tabsContent = [
    {
      value: "popular",
      data: results[0].data?.results,
    },
    {
      value: "topRated",
      data: results[1].data?.results,
    },
  ];

  return (
    <Tabs
      defaultValue={activeTab}
      className="w-screen dark:bg-black mb-10 flex-col gap-4"
    >
      <div className="w-full px-4 flex flex-col gap-6 md:max-w-7xl mx-auto">
        <TabsList className="flex flex-col md:flex-row gap-1.5 items-center justify-between bg-transparent text-primary mb-10 md:mb-0">
          <h1 className="uppercase font-bold text-2xl ">{name}</h1>
          <div className="flex gap-2">
            <TabsTrigger value="popular" asChild>
              <button
                onClick={() => setActiveTab("popular")}
                className={buttonVariants({ variant: "outline" })}
              >
                POPULAR
              </button>
            </TabsTrigger>
            <TabsTrigger value="topRated" asChild>
              <button
                onClick={() => setActiveTab("popular")}
                className={buttonVariants({ variant: "outline" })}
              >
                TOP RATED
              </button>
            </TabsTrigger>
          </div>
        </TabsList>

        {tabsContent.map((val) => (
          <TabsContent value={val.value} key={val.value}>
            <article className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {val.data &&
                val.data.map((data) => (
                  <CardsItem
                    key={data.id}
                    data={data}
                    domain={domain}
                    date={
                      data.release_date
                        ? data.release_date
                        : data.first_air_date
                    }
                  />
                ))}
            </article>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default CardsSection;
