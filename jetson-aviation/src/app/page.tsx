'use client'

import { FlightCategory } from "@/components/FlightCategory";
import { ParallaxPage } from "@/components/ParallaxPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="" >
      <ParallaxPage/>
      <FlightCategory/>
    </main>
  );
}
