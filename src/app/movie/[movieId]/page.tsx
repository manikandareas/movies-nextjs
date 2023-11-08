import AppHeader from "@/components/layout/header";

import "swiper/css";
import "react-circular-progressbar/dist/styles.css";
import { useTheme } from "next-themes";
import HeroContainer from "@/features/movie/details/hero-container";

type Props = {};

const DetailMoviePage = (props: Props) => {
  return (
    <main className="relative">
      <AppHeader />
      {/* Background parallax */}
      <HeroContainer />
      {/* <div className="w-screen h-screen bg-black"></div> */}
    </main>
  );
};

export default DetailMoviePage;
