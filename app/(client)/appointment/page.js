"use client";
import Dropdown from "@/app/components/Dropdown";
import Modal from "@/app/components/Modal";
import React, { useEffect, useState } from "react";

const data = [
  { id: 1, name: "dr. I Dewa Made Artika, Sp.P (K)" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

const Appointment = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [keluhan, setKeluhan] = useState("");
  const [isSubmit, setisSubmit] = useState(false);

  useEffect(() => {
    setisSubmit(false);
    setKeluhan("");
  }, [isSubmit]);

  return (
    <div className="bg-slate-100 h-dvh grow">
      <h1 className="font-bold text-3xl px-50 py-10">Pilih Jadwal</h1>

      <div className="flex gap-4 flex-col overflow-y-auto h-4/5 no-scrollbar px-20 ">
        <div className="h-screen flex items-center">
          <div className="w-32 font-semibold">Pilih Dokter :</div>
          <Dropdown data={data} />
        </div>
        {[...Array(7)].map((a, b) => (
          <div
            key={b}
            onClick={() => setIsOpenForm(true)}
            className="relative flex border bg-white border-gray-400 p-4 rounded-md group hover:bg-purple-100 hover:border-slate-500 cursor-pointer shadow"
          >
            <div className="rounded-tl-md rounded-bl-md absolute top-0 left-0 bottom-0 w-20 bg-slate-700 flex flex-col items-center justify-center py-4 text-gray-50">
              <div className="font-bold">16</div>
              <div className="font-bold">Oct</div>
              <div>Senin</div>
            </div>
            <div className="w-full flex group-hover:bg-purple-100 ml-20">
              <div className="m-3 flex justify-between items-center w-full bg-white group-hover:bg-purple-100">
                <div>
                  <h3 className="font-semibold">12:00 - 14:00</h3>
                  <h2> dr. I Dewa Made Artika, Sp.P (K)</h2>
                </div>
                <button className="bg-purple-700 rounded-full px-7 py-3 text-white cursor-pointer text">
                  Pilih dan lanjutkan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isOpenForm}
        setIsOpen={setIsOpenForm}
        keluhan={keluhan}
        setKeluhan={setKeluhan}
        setisSubmit={setisSubmit}
      />
    </div>
  );
};

export default Appointment;
