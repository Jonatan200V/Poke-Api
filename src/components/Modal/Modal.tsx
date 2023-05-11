import { Variants, motion } from "framer-motion";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const variantsModal: Variants = {
  open: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  close: {
    opacity: 0,
    translateX: 300,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};
export default function Modal({ children }: Props) {
  return (
    <motion.div
      variants={variantsModal}
      initial="close"
      animate="open"
      exit="close"
      className="modal"
    >
      <section className="modal__section">{children}</section>
    </motion.div>
  );
}
