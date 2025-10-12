"use client";
import Dropdown from "@/app/components/Dropdown";
import Modal from "@/app/components/Modal";
import React, { useEffect, useState } from "react";

const Appointment = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [keluhan, setKeluhan] = useState("");
  const [isSubmit, setisSubmit] = useState(false);

  useEffect(() => {
    console.log(keluhan);
    setisSubmit(false);
    setKeluhan("");
  }, [isSubmit]);

  return (
    <div className="bg-gray-100 h-dvh">
      <h1 className="font-bold text-3xl px-70 py-10">Pilih Jadwal</h1>

      <div className="flex gap-4 flex-col overflow-y-auto h-4/5 no-scrollbar px-72 ">
        <Dropdown />
        {[...Array(7)].map((a, b) => (
          <div
            key={b}
            onClick={() => setIsOpenForm(true)}
            className="relative flex border bg-white border-gray-400 p-4 rounded-md group hover:bg-slate-200 hover:border-slate-500 cursor-pointer"
          >
            <div className="rounded-tl-md rounded-bl-md absolute top-0 left-0 bottom-0 w-20 bg-slate-700 flex flex-col items-center justify-center py-4 text-gray-50">
              <div className="font-bold">16</div>
              <div className="font-bold">Oct</div>
              <div>Senin</div>
            </div>
            <div className="w-full flex group-hover:bg-slate-200 ml-20">
              <div className="m-3 flex justify-between items-center w-full bg-white group-hover:bg-slate-200">
                <div>
                  <h3 className="font-semibold">12:00 - 14:00</h3>
                  <h2> dr. I Dewa Made Artika, Sp.P (K)</h2>
                </div>
                <button className="bg-red-500 rounded-full px-7 py-3 text-white cursor-pointer text">
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
