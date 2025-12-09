"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const [level, setlevel] = useState("");

  const menu = () => {
    if (level === "konselor") {
      return [
        { title: "Home", href: "/jadwal" },
        { title: "Atur Jadwal", href: "/atur-jadwal" },
        { title: "Riwayat Konsultasi", href: "/riwayat-konsultasi" },
        { title: "Logout", href: "/login" },
      ];
    } else {
      return [
        {
          title: "Perjanjian Saya",
          href: "/current-appointments",
        },
        {
          title: "Buat Perjanjian",
          href: "/appointment",
        },
        {
          title: "Logout",
          href: "/login",
        },
      ];
    }
  };

  useEffect(() => {
    if (pathname === "/jadwal") {
      setlevel("konselor");
    } else {
      setlevel("client");
    }
  }, []);

  const linkClass = (path) =>
    pathname === path
      ? "text-purple-600 font-bold px-3 py-2 cursor-pointer"
      : "text-black cursor-pointer";
  return (
    <div className="md:hidden">
      <div className="h-16 p-2 w-full bg-linear-to-r bg-purple-300 flex items-center justify-between gap-4 lg:gap-10 px-4">
        <div className="flex shrink-0 gap-2 items-center">
          <img
            className="size-12 lg:size-42 rounded-full"
            src="/logo.png"
            alt=""
          />{" "}
        </div>
        <div className="capitalize flex-1 flex items-center text-xs lg:text-base gap-2 lg:gap-10 justify-center font-semibold">
          {menu().map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`rounded-md hover:bg-purple-500 hover:text-slate-100 px-3 py-2 ${linkClass(
                item.href
              )}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
