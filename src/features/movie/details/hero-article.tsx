"use client";

import { Badge } from "@/components/ui/badge";
import { MovieDetails, SeriesDetails } from "@/types";
import { Play } from "lucide-react";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

type Props = {
  theme: string;
  details: MovieDetails | SeriesDetails;
};

const HeroArticle = (props: Props) => {
  const { theme, details } = props;
  return (
    <>
      <h1 className="font-bold md:text-6xl text-3xl">
        {details.name ? details.name : details.title}
      </h1>
      <div className="flex gap-3 items-center">
        <CircularProgressbar
          value={Number(details.vote_average.toFixed(1))}
          maxValue={10}
          text={details.vote_average.toFixed(1)}
          styles={{
            root: { width: "3rem", color: "green" },
            path: { stroke: "#66bb6a" },
            text: {
              fontSize: "30px",
              fontWeight: "bold",
              fill: theme === "light" ? "#000" : "#fff",
            },
            trail: {
              stroke: "#fff",
            },
          }}
        />
        {details.genres.map((genre) => (
          <Badge
            key={genre.id}
            className="bg-red-600 text-primary w-fit h-fit text-white"
          >
            {genre.name}
          </Badge>
        ))}
      </div>
      <p>{details.overview}</p>
      <div>
        <button className="px-4 py-2 bg-red-600 w-fit flex items-center rounded-sm font-semibold text-sm gap-1.5 text-white">
          <Play fill="white" size={12} />
          <span>WATCH NOW</span>
        </button>
      </div>
    </>
  );
};

export default HeroArticle;
