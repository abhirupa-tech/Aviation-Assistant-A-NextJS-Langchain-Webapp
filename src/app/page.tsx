'use client'

import { ParallaxPage } from "@/components/ParallaxPage";
import { ParallaxPagePhone } from "@/components/ParallaxPagePhone";
import React from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 760px)').matches);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 760px)').matches);
    console.log("ismobile", isMobile)
  }, []);

  return (
    <React.Fragment>
      {isMobile ? <ParallaxPagePhone/> : <ParallaxPage />}
    </React.Fragment>
  );
}
