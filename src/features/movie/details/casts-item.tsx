import { StaticImageData } from "next/image";
import React from "react";

type Props = {
  src: string
  cast: string
};

const CastsItem = (props: Props) => {
  const { cast,src } = props;
  return (
    <div
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${src})` }} 
      className="w-full flex items-end max-w-[13rem] h-[16rem] bg-cover bg-center"
    >
      <h3 className="text-white w-full bg-black/50 backdrop-blur-sm p-2 text-base font-medium">
     {cast}
      </h3>
    </div>
  );
};

export default CastsItem;
