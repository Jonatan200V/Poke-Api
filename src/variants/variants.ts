import type { Variants } from "framer-motion";
const transitionCard = {
  transition: {
    duration: 0.5,
    type: "spring",
  },
};
export const variantsCard: Variants = {
  close: {
    translateY: 91.2,
  },
  open: {
    translateY: 0,
    transition: transitionCard,
  },
  imageHover: {
    translateY: -35,
  },
  imageInitial: {
    translateY: 60,
  },
  view: {
    opacity: 1,
  },
  notView: {
    opacity: 0,
  },
};
export const variantsPokedex: Variants = {
  close: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};
