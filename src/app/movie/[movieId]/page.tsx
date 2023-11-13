import AppHeader from "@/components/layout/header";

import "swiper/css";
import "react-circular-progressbar/dist/styles.css";
import HeroContainer from "@/features/movie/details/hero-container";
import { Metadata, ResolvingMetadata } from "next";
import { myMetadata } from "@/components/meta/Metadata";
import { axiosInstances } from "@/common/lib/axios";
import { MovieDetails } from "@/types";

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const movieId = params.movieId;

  // fetch data
  const movie = await axiosInstances
    .get(`/movie/${movieId}`)
    .then((res) => res.data as MovieDetails);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Movie: ${movie.title || movie.name}`,
    description: movie.overview,
    openGraph: {
      images: [
        `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        ...previousImages,
      ],
    },
    metadataBase: new URL("https://movies-nextjs-coral.vercel.app"),
  };
}

type Props = {
  params: { movieId: string };
};
const DetailMoviePage = ({ params }: Props) => {
  return (
    <main className="relative">
      <AppHeader />
      {/* Background parallax */}
      <HeroContainer id={+params.movieId} domain={"movie"} />

      {/* <div className="w-screen h-screen bg-black"></div> */}
    </main>
  );
};

export default DetailMoviePage;
