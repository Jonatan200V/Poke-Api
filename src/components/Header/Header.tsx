"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LinksHeader, header, homeLinkImage } from "./headerMap";
import { motion } from "framer-motion";
import Link from "next/link";

interface State {
  underline: LinksHeader;
}

export default function Header() {
  const [selectPage, setSelectPage] = useState<State["underline"]>(
    LinksHeader.Home,
  );

  const changePageUnderline = (name: LinksHeader) => {
    setSelectPage(name);
  };
  return (
    <header className="header">
      <nav>
        <ul className="header__ul">
          <Link href={""}>
            <li
              className="header__li"
              onClick={() => changePageUnderline(LinksHeader.Home)}
            >
              <Image
                src={homeLinkImage}
                alt="Pokemon Inicio"
                width={100}
                height={100}
                className="header__image"
              />
              {selectPage === LinksHeader.Home && (
                <motion.div
                  className="header__underline"
                  layoutId="underline"
                />
              )}
            </li>
          </Link>
          <motion.div className="header__div">
            {header.map(link => (
              <Link href={link.link}>
                <li key={link.id} className="header__li">
                  <div
                    className="header__name"
                    onClick={() => changePageUnderline(link.name)}
                  >
                    <span>{link.name}</span>
                    {selectPage === link.name && (
                      <motion.div
                        className="header__underline"
                        layoutId="underline"
                      />
                    )}
                  </div>
                </li>
              </Link>
            ))}
          </motion.div>
        </ul>
      </nav>
    </header>
  );
}
