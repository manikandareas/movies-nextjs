import dummyImage from "../../../../public/assets/images/background-original.jpg";
import HeroContent from "./hero-content";

type Props = {};

const HeroContainer = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-fixed flex items-end justify-center"
      style={{ backgroundImage: `url("${dummyImage.src}")` }}
    >
      <HeroContent />
    </div>
  );
};

export default HeroContainer;
