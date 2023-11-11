import AppHeader from "@/components/layout/header";

import "swiper/css";
import "react-circular-progressbar/dist/styles.css";
import HeroContainer from "@/features/movie/details/hero-container";

const DetailSeriesPage = ({ params }: { params: { seriesId: string } }) => {
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
