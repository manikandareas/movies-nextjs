import { ModeToggle } from "@/components/ui/toggle-theme";
import { Home, PlaySquare, Tv, Search } from "lucide-react";

export const headerLists = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "movies",
    path: "/movie",
  },
  {
    name: "tv series",
    path: "/tv",
  },
  {
    name: "search",
    path: "/search",
  },
];

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
        path: "/movie",
        icon: PlaySquare,
      },
      {
        name: "tv series",
        path: "/tv",
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
