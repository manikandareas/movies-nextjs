import AppHeader from "@/components/layout/header";

import "swiper/css";
import "react-circular-progressbar/dist/styles.css";
import HeroContainer from "@/features/movie/details/hero-container";
import { Metadata, ResolvingMetadata } from "next";
import { axiosInstances } from "@/common/lib/axios";
import { SeriesDetails } from "@/types";

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const seriesId = params.seriesId;

  // fetch data
  const series = await axiosInstances
    .get(`/tv/${seriesId}`)
    .then((res) => res.data as SeriesDetails);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Series: ${series.title || series.name}`,
    description: series.overview,
    openGraph: {
      images: [
        `https://image.tmdb.org/t/p/original${series.poster_path}`,
        ...previousImages,
      ],
    },
    metadataBase: new URL("https://movies-nextjs-coral.vercel.app"),
  };
}

type Props = {
  params: { seriesId: string };
};

const DetailSeriesPage = ({ params }: Props) => {
  return (
    <main className="relative">
      <AppHeader />
      {/* Background parallax */}
      <HeroContainer id={+params.seriesId} domain="series" />

      {/* <div className="w-screen h-screen bg-black"></div> */}
    </main>
  );
};

export default DetailSeriesPage;
