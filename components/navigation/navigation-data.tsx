import { BarChart4, Goal, HeartPulse, Salad } from "lucide-react";

export const navigations = [
  {
    label: "Statistiques",
    icon: <BarChart4 />,
    path: "/",
  },
  {
    label: "Regime",
    icon: <Salad />,
    path: "/regime",
  },
  {
    label: "Bien être",
    icon: <HeartPulse />,
    path: "/bien-etre",
  },
  {
    label: "Objectifs",
    icon: <Goal />,
    path: "/objectifs",
  },
];
