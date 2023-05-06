import React from "react";
import { HeaderTypes } from "./types";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinksHeader } from "./headerMap";
interface Props {
  link: HeaderTypes;
  selectPage: LinksHeader;
  changePageUnderline: (name: LinksHeader) => void;
}

export default function HeaderlI({
  link,
  selectPage,
  changePageUnderline,
}: Props) {
  return (
    <Link href={link.link} key={link.id}>
      <li className="header__li">
        <div
          className="header__name"
          onClick={() => changePageUnderline(link.name)}
        >
          <span>{link.name}</span>
          {selectPage === link.name && (
            <motion.div className="header__underline" layoutId="underline" />
          )}
        </div>
      </li>
    </Link>
  );
}
