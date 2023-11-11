"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import CastsItem from "./casts-item";
import SectionTitle from "@/components/ui/section-title";
import { useEffect, useState } from "react";
import { MovieCredits, SeriesCredits } from "@/types";

type Props = {
  credits: MovieCredits | SeriesCredits;
};

const CastsSlider = ({ credits }: Props) => {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window && window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="w-full md:max-w-3xl max-w-[26rem] space-y-4">
      <SectionTitle>cast</SectionTitle>
      <Swiper
        grabCursor={true}
        spaceBetween={5}
        slidesPerView={windowSize && windowSize.innerWidth < 762 ? 2 : 4}
        style={{ height: "max-content" }}
        className="w-full"
      >
        {credits?.cast.map((cast) => (
          <SwiperSlide
            className="md:h-[16rem] w-full max-w-[13rem]"
            style={{ width: "100%", maxHeight: "16rem" }}
            key={cast.id}
          >
            <CastsItem cast={cast.name} src={cast.profile_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastsSlider;
