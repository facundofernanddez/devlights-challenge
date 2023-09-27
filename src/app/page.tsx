"use client";

import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const endpoint =
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";

  // useEffect(() => {
  //   const result = axios.get(endpoint);

  //   console.log(result);
  // }, []);

  return <main className="">Dev challenge</main>;
}
