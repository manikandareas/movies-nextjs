"use client";
import {
  MoviesPopular,
  MoviesTopRated,
  SeriesPopular,
  SeriesTopRated,
} from "@/types";
import Link from "next/link";
import { CircularProgressbar } from "react-circular-progressbar";

const CardsItem = ({
  data,
  date,
  domain,
}: {
  data: MoviesPopular | MoviesTopRated | SeriesPopular | SeriesTopRated;
  date: string;
  domain: "movie" | "series";
}) => {
  const { name, poster_path, vote_average, title } = data;
  return (
    <Link href={`/${domain}/${data.id}`}>
      <div
        className="min-h-[21rem] md:h-[33rem] w-full bg-cover bg-center flex items-end group"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${poster_path}")`,
        }}
      >
        <div className="w-full flex flex-col items-start gap-3 bg-gradient-to-t text-white from-black via-black/80 to-transparent p-4 md:opacity-0 md:translate-y-10 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all ease-in overflow-hidden">
          <CircularProgressbar
            value={Number(vote_average.toFixed(1))}
            maxValue={10}
            text={vote_average.toFixed(1)}
            styles={{
              root: { width: "3rem", color: "green" },
              path: { stroke: "#66bb6a" },
              text: {
                fontSize: "30px",
                fontWeight: "bold",
                fill: "#fff",
              },
              trail: {
                stroke: "#fff",
              },
            }}
          />
          <h3>{date.slice(0, 4)}</h3>
          <h2>{name ? name : title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CardsItem;
