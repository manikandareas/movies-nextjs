"use client";
import Image from "next/image";
import dummyImage from "../../../../public/assets/images/background-original.jpg";
import dummyImage2 from "../../../../public/assets/images/background-original2.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

type Props = {};

const HeroContent = (props: Props) => {
  const { theme } = useTheme();

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
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
    <div className="w-screen  mt-32 md:mt-0 bg-gradient-to-t from-white via-white dark:from-black dark:via-black  to-transparent">
      <div className="w-full h-full md:max-w-7xl  flex flex-col md:flex-row items-center mx-auto">
        <Image
          src={dummyImage2}
          alt="background"
          className="w-full h-[25.6rem] max-w-[18.3rem] md:h-[45.5rem] md:max-w-[32.6rem]  object-cover"
        />
        <div className="flex flex-col gap-10 p-4 w-screen">
          <h1 className="font-bold md:text-6xl text-3xl">
            {"Mavka: The Forest Song 2023"}
          </h1>
          <div className="flex gap-3 items-center">
            <CircularProgressbar
              value={Number(7)}
              maxValue={10}
              text={"7"}
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
            <Badge className="bg-red-600 text-primary w-fit h-fit text-white">
              Action
            </Badge>
            <Badge className="bg-red-600 text-primary w-fit h-fit text-white">
              Action
            </Badge>
          </div>
          <p>
            Forest soul Mavka faces an impossible choice between her heart and
            her duty as guardian to the Heart of the Forest, when she falls in
            love with the talented young human musician Lukas.
          </p>
          <div>
            <button className="px-4 py-2 bg-red-600 w-fit flex items-center rounded-sm font-semibold text-sm gap-1.5 text-white">
              <Play fill="white" size={12} />
              <span>WATCH NOW</span>
            </button>
          </div>
          <div className="w-full md:max-w-3xl max-w-[26rem] space-y-4">
            <div className="flex flex-col items-start px-4 md:px-0">
              <h1 className="uppercase font-bold text-2xl ">CAST</h1>
              <span className="w-24 h-1 bg-red-600" />
            </div>
            <Swiper
              grabCursor={true}
              spaceBetween={5}
              slidesPerView={windowSize && windowSize.innerWidth < 762 ? 2 : 4}
              style={{ height: "max-content" }}
              className="w-full"
            >
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <SwiperSlide
                    key={index}
                    className="md:h-[16rem] w-full max-w-[13rem]"
                    style={{ width: "100%", maxHeight: "16rem" }}
                  >
                    <div
                      style={{ backgroundImage: `url(${dummyImage.src})` }}
                      className="w-full flex items-end max-w-[13rem] h-[16rem] bg-cover bg-center"
                    >
                      <div>
                        <h3 className="text-white bg-black/30 p-2 text-base font-medium">
                          Artem Denysenko
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
