import { ModeToggle } from "@/components/ui/toggle-theme";
import { Home, PlaySquare, Tv, Search } from "lucide-react";

export const headerLists = ["movies", "tv series", "search"];

export const asideMenus = [
  {
    name: "menu",
    lists: [
      {
        name: "home",
        path: "/",
        icon: Home,
      },
      {
        name: "movies",
        path: "/movies",
        icon: PlaySquare,
      },
      {
        name: "tv series",
        path: "/tv-series",
        icon: Tv,
      },
      {
        name: "search",
        path: "/search",
        icon: Search,
      },
    ],
  },
  {
    name: "theme",
    lists: [
      {
        name: "theme mode",
        path: "",
        icon: ModeToggle,
      },
    ],
  },
];
