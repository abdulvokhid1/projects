import { Main } from "../components/Main";
import Reports from "../components/Reports";
import DedicatedLane from "../components/DedicatedLane";
import Monitoring from "../components/Monitoring";
import Loads from "../components/Loads";

export const sidebar = [
  {
    id: 1,
    title: "Main",
    path: "/main",
    element: <Main />,
    icon: "",
    element: [],
  },

  {
    id: 2,
    title: "Loads",
    path: "/loads",
    element: <Loads />,
    icon: "",
    element: [],
  },
  {
    id: 3,
    title: "Dedicated Lane",
    path: "/dedicated_lane",
    element: <DedicatedLane />,
    icon: "",
    element: [],
  },
  {
    id: 4,
    title: "Reports",
    path: "/reports",
    element: <Reports />,
    icon: "",
    element: [],
  },
  {
    id: 5,
    title: "Monitoring",
    path: "/monitoring",
    element: <Monitoring />,
    icon: "",
    element: [],
  },
];
