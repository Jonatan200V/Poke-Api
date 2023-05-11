"use client";
import React from "react";
import "@/services/firebase";
import Left from "@/components/Login/Left";
import Right from "@/components/Login/Right";
export default function page() {
  return (
    <section className="login">
      <Left />
      <Right />
    </section>
  );
}
