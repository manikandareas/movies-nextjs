import { useEffect, useState } from "react";

export const useHeader = () => {
  const [isAside, setIsAside] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        document.querySelectorAll("header")?.forEach((el) => {
          el.classList.add("bg-white");
          el.classList.add("dark:bg-black");
          el.classList.add("dark:bg-none");
        });
      } else if (window.screenY < 60) {
        document.querySelectorAll("header")?.forEach((el) => {
          el.classList.remove("bg-white");
          el.classList.remove("dark:bg-black");
          el.classList.remove("dark:bg-none");
        });
      }
    });
  });

  return {
    isAside,
    setIsAside,
  };
};
