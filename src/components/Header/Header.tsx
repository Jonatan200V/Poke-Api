"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LinksHeader, header, homeLinkImage } from "./headerMap";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import HeaderlI from "./HeaderlI";

interface State {
  underline: LinksHeader;
}

export default function Header() {
  const [selectPage, setSelectPage] = useState<State["underline"]>(
    LinksHeader.Home,
  );
  const { user } = useAppSelector(state => state);
  const changePageUnderline = (name: LinksHeader) => {
    setSelectPage(name);
  };
  return (
    <header className="header">
      <nav>
        <ul className="header__ul">
          <Link href={"/"}>
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
          {user && <li>{user.user?.email}</li>}
          <motion.div className="header__div">
            {header.map(link => (
              <HeaderlI
                key={link.id}
                link={link}
                selectPage={selectPage}
                changePageUnderline={changePageUnderline}
              />
            ))}
          </motion.div>
        </ul>
      </nav>
    </header>
  );
}
