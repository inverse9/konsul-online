"use client";
import React, { Fragment, useEffect, useState } from "react";

const Dokter = ({ id, timeSlot }) => {
  const [dokter, setdokter] = useState({ nama: "dr. Siti Aminah" });

  const getDokter = async (id) => {
    switch (id) {
      case 3:
        return { nama: "dr. Siti Aminah" };
      case 7:
        return { nama: "dr. Budi Santoso" };
      case 8:
        return { nama: "dr. Rizky Pratama" };
      case 9:
        return { nama: "dr. Dewi Kartika" };
      case 10:
        return { nama: "dr. Andi Wijaya" };
      case 11:
        return { nama: "dr. Rina Kusuma" };
    }
  };

  useEffect(() => {
    // Fix: Handle the async function correctly
    const fetchData = async () => {
      const data = await getDokter(id);
      setdokter(data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {dokter ? (
        <Fragment key={dokter.id}>
          <div className="rounded-tl-md rounded-bl-md absolute top-0 left-0 bottom-0 w-20 bg-slate-700 flex flex-col items-center justify-center py-4 text-gray-50">
            <div>Senin</div>
          </div>
          <div className="w-full flex group-hover:bg-purple-100 ml-20">
            <div className="m-1 gap-2 sm:m-3 flex flex-col sm:flex-row sm:justify-between sm:items-center w-full bg-white group-hover:bg-purple-100">
              <div>
                <h3 className="font-semibold">{timeSlot}</h3>
                <h2> {dokter.nama}</h2>
              </div>
              <button className="bg-purple-700 self-center rounded-full px-7 py-3 text-white cursor-pointer flex items-center w-fit">
                Pilih dan lanjutkan
              </button>
            </div>
          </div>
        </Fragment>
      ) : (
        <p className="text-gray-500">
          {dokter ? "Loading..." : "Periksa koneksi anda"}
        </p>
      )}
    </>
  );
};

export default Dokter;
