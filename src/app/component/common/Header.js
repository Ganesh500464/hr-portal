"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [log, setLog] = useState(false);

  const [present, setPresent] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between px-3 text-[#fff] py-2.5 bg-blue-600">
        <div>
          <p className="font-bold">Logo</p>
        </div>
        <div className="flex gap-3">
          <div>
            <button
              onClick={() => setPresent(!present)}
              className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-md"
            >
              {present === false ? "Check In" : "Check Out"}
            </button>
          </div>

          <div>
            <button
              className="bg-red-700 text-white text-sm px-3 py-1 rounded-md"
              onClick={() => router.push("/login")}
            >
              {"Logout"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
