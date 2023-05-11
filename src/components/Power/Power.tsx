import React, { useState } from "react";
import Info from "../icons/Info/Info";
import { AnimatePresence, motion } from "framer-motion";
import { variantsPokedex } from "@/variants/variants";

interface Props {
  handleClick: () => void;
  icon: JSX.Element;
  count: number;
  explication: string;
}

export default function Power({
  count,
  handleClick,
  icon,
  explication,
}: Props) {
  const [viewInfo, setViewInfo] = useState<boolean>(false);
  const handleClickOpenInfo = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
    setViewInfo(view => !view);
  };
  return (
    <button className="power" onClick={handleClick}>
      <div className="power__span">
        <span className="power__count">{count}</span>
        <div onClick={handleClickOpenInfo}>
          <i>
            <Info />
          </i>
        </div>
      </div>
      <AnimatePresence>
        {viewInfo && (
          <motion.div
            className="power__info"
            initial="close"
            animate="open"
            exit="close"
            variants={variantsPokedex}
            onClick={handleClickOpenInfo}
          >
            <p className="power__p">{explication}</p>
          </motion.div>
        )}
      </AnimatePresence>
      {icon}
    </button>
  );
}
