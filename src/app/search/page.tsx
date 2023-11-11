"use client";
import { cn } from "@/common/lib/utils";
import CardsItem from "@/components/homepage/cards-item";
import AppHeader from "@/components/layout/header";
import {
  useSearchMovie,
  useSearchSeries,
} from "@/features/search/services/search.hook";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import "react-circular-progressbar/dist/styles.css";

const SearchPage = () => {
  const [activeButton, setActiveButton] = React.useState<"movie" | "series">(
    "movie"
  );

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const data =
    searchParams.get("query") && activeButton === "movie"
      ? useSearchMovie(searchParams.get("query")?.toString() || "")
      : useSearchSeries(searchParams.get("query")?.toString() || "");

  const handleInput = useDebouncedCallback((term: string) => {
    if (term) {
      params.set("query", term);
      params.set("search", activeButton);
    } else {
      params.delete("query");
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000);
  return (
    <main className="relative min-h-screen dark:bg-black">
      <AppHeader />
      <div className="w-full p-6 max-w-7xl flex flex-col items-center gap-2 mx-auto">
        <div className="flex gap-3 mt-16">
          <button
            onClick={() => setActiveButton("movie")}
            className={cn(
              "uppercase px-4 py-2 rounded-md border border-transparent",
              activeButton === "movie"
                ? "bg-red-600 text-white "
                : "border-white/20"
            )}
          >
            Movie
          </button>

          <button
            onClick={() => setActiveButton("series")}
            className={cn(
              "uppercase px-4 py-2 rounded-md border border-transparent ",
              activeButton === "series"
                ? "bg-red-600 text-white"
                : "border-white/20"
            )}
          >
            Tv Series
          </button>
        </div>
        <input
          className="p-2 bg-transparent rounded-md border border-slate-600/50 hover:border-white w-full"
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => handleInput(e.target.value)}
        />
        <article className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {data &&
            data.data?.results.map((data) => (
              <CardsItem
                key={data.id}
                data={data}
                domain={activeButton}
                date={
                  data.release_date
                    ? data.release_date
                    : data.first_air_date || "0"
                }
              />
            ))}
        </article>
      </div>
    </main>
  );
};

export default SearchPage;
