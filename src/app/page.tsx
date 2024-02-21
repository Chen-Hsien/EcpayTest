"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  // change
  const JSON_URL = "https://jsonplaceholder.typicode.com/posts";

  const NEXT_API_URL =
    "https://ecpay-test-15jdyi0gb-chen-hsien.vercel.app/api/delivery/address/family_mart_callback";

  const NEXT_API_HOME_URL =
    "https://ecpay-test-15jdyi0gb-chen-hsien.vercel.app/";

  const BACKEND_API_URL = "http://localhost:8000/api/post";

  const MEMF_DOMAIN = "https://ecmfme.map.com.tw/default.aspx";

  const ELEVEN_DOMAIN = "https://emap.presco.com.tw";

  const mfme =
    MEMF_DOMAIN +
    "?CvsName=ichichain.com&CvSid=0&CvsTemp=0&Exchange=true&CvsLink=" +
    NEXT_API_URL;

  const mfmeHome =
    MEMF_DOMAIN +
    "?CvsName=ichichain.com&CvSid=0&CvsTemp=0&Exchange=true&CvsLink=" +
    NEXT_API_HOME_URL;

  const mfmeJSON =
    MEMF_DOMAIN +
    "?CvsName=ichichain.com&CvSid=0&CvsTemp=0&Exchange=true&CvsLink=" +
    JSON_URL;

  const eleven = ELEVEN_DOMAIN + "/c2cemap.ashx?url=" + NEXT_API_URL;
  const handleButtonClick = async () => {
    const base_param = {
      MerchantTradeNo: "f0a0d7e9fae1bb72bc93", // Example parameters, adjust as needed
      ServerReplyURL:
        "http://localhost:3001/api/delivery/address/family_mart_callback",
      LogisticsType: "CVS",
      LogisticsSubType: "FAMITC2C",
      IsCollection: "N",
      Device: "0",
    };

    try {
      const response = await fetch("/api/delivery/map", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(base_param),
      });

      const data = await response.json();
      console.log(data); // Process the response data as needed
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleButtonClick}>Choose Logistics</button>
      <Link href={mfme}>全家</Link>
      <Link href={mfmeHome}>全家導致Home</Link>
      <Link href={mfmeJSON}>全家JSON</Link>
      <Link href={eleven}>7-11</Link>
    </main>
  );
}
