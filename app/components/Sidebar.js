"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [level, setlevel] = useState("");
  const pathname = usePathname();
  const linkClass = (path) =>
    pathname === path
      ? "text-purple-600 font-bold px-3 py-2 cursor-pointer"
      : "text-black cursor-pointer";

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

  return (
    <div className="bg-purple-300/20 border-r-2 border-purple-200 h-dvh w-56 py-8 flex flex-col items-center">
      <div>
        <img className="size-42 rounded-full" src="/logo.jpg" alt="" />
        <div className="mt-8 flex flex-col gap-y-2 text-sm">
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
};

export default Sidebar;
