"use client";
import Image from "next/image";

import { useTheme } from "next-themes";
import HeroArticle from "./hero-article";

import CastsSlider from "./casts-slider";

import { MovieDetailsResponse } from "@/services/movies";
import { SeriesDetailsResponse } from "@/services/series";

type Props = {
  data: MovieDetailsResponse | SeriesDetailsResponse;
};

const HeroContent = (props: Props) => {
  const { theme } = useTheme();

  // const {data,isLoading} = useQuery({

  // })

  return (
    <div className="w-screen  py-20 md:p-8 bg-gradient-to-t from-white via-white dark:from-black dark:via-black  to-transparent">
      <div className="w-full h-full md:max-w-7xl  flex flex-col md:flex-row items-center mx-auto">
        <Image
          src={`https://image.tmdb.org/t/p/original/${props.data.details.poster_path}`}
          width={200}
          height={400}
          alt="background"
          className="w-full h-[25.6rem] max-w-[18.3rem] md:h-[40rem] md:max-w-[30rem]  object-cover"
        />
        <article className="flex flex-col gap-8 p-4 w-screen">
          <HeroArticle theme={theme || "dark"} details={props.data.details} />
          <CastsSlider credits={props.data.credits} />
        </article>
      </div>
    </div>
  );
};

export default HeroContent;
