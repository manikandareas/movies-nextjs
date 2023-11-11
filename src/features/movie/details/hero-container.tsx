"use client";

import HeroContent from "./hero-content";
import { useMovieDetails, useSeriesDetails } from "./details.hook";

type Props = {
  id: number;
  domain: "movie" | "series";
};

const HeroContainer = ({ id, domain }: Props) => {
  const { data, isLoading } =
    domain === "movie" ? useMovieDetails(id) : useSeriesDetails(id);
  return (
    <>
      <div className="absolute inset-0 bg-black/5 w-full h-full " />
      <section
        className="w-full min-h-screen  bg-cover bg-center bg-fixed flex items-end justify-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.details.backdrop_path})`,
        }}
      >
        {data && <HeroContent data={data} />}
      </section>
      {/* <section className="w-full h-full md:max-w-7xl p-4 flex flex-col md:flex-row mx-auto">
        <SectionTitle>Videos</SectionTitle>
        <div></div>
      </section> */}
    </>
  );
};

export default HeroContainer;
