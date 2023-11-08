"use client";
import { Badge } from "@/components/ui/badge";
import { CircularProgressbar } from "react-circular-progressbar";
import { Play } from "lucide-react";
import { useTheme } from "next-themes";
import { convertToMaxLengthDescription, getMovieGenreById, getSeriesGenreById } from "@/common/lib/utils";

interface Props {
  backdrop_path: string;
  name: string;
  overview: string;
  vote_average: number;
  title: string;
  genres: number[]
}
const HeroContentSlider = ({
  title,
  backdrop_path,
  name,
  overview,
  vote_average,
  genres
}: Props) => {
  const { theme } = useTheme();

  return (
    <div
      className="w-full h-[40rem] md:h-[50rem]  flex items-center md:px-40 px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr dark:from-black dark:via-black/80  from-white via-white/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r dark:from-black from-white/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t dark:from-black/80 dark:via-black/20  from-white via-white/50 to-transparent" />
      <article className="flex flex-col gap-8 p-4 z-10">
        <h1 className="font-bold md:text-5xl text-3xl">
          {name ? name : title}
        </h1>

        <div className="flex gap-3 items-center">
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
                fill: theme === "light" ? "#000" : "#fff",
              },
              trail: {
                stroke: "#fff",
              },
            }}
          />
          {genres.slice(0, 3).map((id) => (
            <Badge
              key={id}
              className="bg-red-600 text-primary w-fit h-fit text-white"
            >
              {getMovieGenreById(id)
                ? getMovieGenreById(id)
                : getSeriesGenreById(id)}
            </Badge>
          ))}
        </div>

        <p className="max-w-2xl">
          {convertToMaxLengthDescription(overview, 300)}
        </p>

        <button className="px-4 py-2 bg-red-600 w-fit flex items-center rounded-sm font-semibold text-sm gap-1.5 text-white">
          <Play fill="white" size={12} />
          <span>WATCH NOW</span>
        </button>
      </article>
    </div>
  );
};

export default HeroContentSlider;
