"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? "text-white cursor-pointer"
      : "text-black hover:text-white cursor-pointer";
  return (
    <div>
      <div className="h-20 w-full bg-linear-to-r from-[#D78C00] to-[#F1BB6A] flex items-center justify-between gap-4 lg:gap-10 px-4">
        <div className="flex shrink-0 gap-2 items-center">
          <img className="size-16" src="/undiknas.png" alt="" />
          <div className="flex-col hidden md:flex">
            <span>UNIVERSITAS PENDIDIKAN NASIONAL</span>{" "}
            <span>UNDIKNAS UNIVERSITY</span>
          </div>
        </div>
        <div className="capitalize flex-1 flex items-center text-xs lg:text-base gap-2 lg:gap-10 justify-center font-semibold">
          <Link href="/home" className={linkClass("/home")}>
            Home
          </Link>
          <Link href="/comvis" className={linkClass("/comvis")}>
            company visit
          </Link>
          <Link href="/produk" className={linkClass("/produk")}>
            produk lokal
          </Link>
          <Link href="/informasi" className={linkClass("/informasi")}>
            informasi
          </Link>
          <Link href="/pendaftaran" className={linkClass("/pendaftaran")}>
            pendaftaran
          </Link>
        </div>
        {/* <Link href="/profile" className={"hidden lg:block size-10"}>
          <img
            className="size-full rounded-full"
            src="/userpande.jpeg"
            alt=""
          />
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
