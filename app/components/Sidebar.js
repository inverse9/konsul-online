"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const linkClass = (path) =>
    pathname === path
      ? "text-purple-600 font-bold px-3 py-2 cursor-pointer"
      : "text-black cursor-pointer";

  return (
    <div className="bg-purple-300/20 border-r-2 border-purple-200 h-dvh w-56 py-8 flex flex-col items-center">
      <div>
        <img className="size-42 rounded-full" src="/logo.jpg" alt="" />
        <div className="mt-8 flex flex-col gap-y-2 text-sm">
          <Link
            href="/jadwal"
            className={`rounded-md hover:bg-purple-500 hover:text-slate-100 px-3 py-2 ${linkClass(
              "/jadwal"
            )}`}
          >
            Home
          </Link>
          <Link
            href="/atur-jadwal"
            className={`rounded-md hover:bg-purple-500 hover:text-slate-100 px-3 py-2 ${linkClass(
              "/atur-jadwal"
            )}`}
          >
            Atur Jadwal
          </Link>
          <Link
            href="/jadwal-setting"
            className={`rounded-md hover:bg-purple-500 hover:text-slate-100 px-3 py-2 ${linkClass(
              "/jadwal-setting"
            )}`}
          >
            Atur Jadwal
          </Link>
          <Link
            href="/atur-jadwal"
            className={`rounded-md hover:bg-purple-500 hover:text-slate-100 px-3 py-2 ${linkClass(
              "/jadwal-setting"
            )}`}
          >
            Atur Jadwal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
