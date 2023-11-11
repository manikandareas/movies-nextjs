import AppHeader from "@/components/layout/header";

import "swiper/css";
import "react-circular-progressbar/dist/styles.css";
import HeroContainer from "@/features/movie/details/hero-container";

type Props = {};

const DetailMoviePage = ({ params }: { params: { movieId: string } }) => {
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
