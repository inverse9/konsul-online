"use client";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";
import Dropdown from "@/app/components/Dropdown";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React, { useState } from "react";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";

const data = [
  { id: 1, name: "Senin" },
  { id: 2, name: "Selasa" },
  { id: 3, name: "Rabu" },
  { id: 4, name: "Kamis" },
  { id: 5, name: "Jumat" },
  { id: 6, name: "Sabtu" },
  { id: 7, name: "Minggu" },
];

const Modal = ({ isOpen, setIsOpen, desc, setDesc, setisopendesc }) => {
  const submitForm = () => {
    setisopendesc(true);
    setIsOpen(false);
  };
  const [value, onChange] = useState(["10:00", "11:00"]);
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            onClick={() => setIsOpen(false)}
            className="flex min-h-full items-center justify-center p-4 bg-slate-700/30 backdrop-blur-sm"
          >
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-slate-200 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-xl font-semibold slate-700 text-left"
              >
                Tambah Jadwal
              </DialogTitle>
              <div className="mt-10 ">
                <div className="flex gap-2 items-center">
                  <label htmlFor="">Hari</label>
                  <Dropdown data={data} />
                </div>
                <div className="flex gap-2 items-center mt-4">
                  <label htmlFor="">Jam</label>

                  <TimeRangePicker
                    onChange={onChange}
                    value={value}
                    format="HH:mm"
                    clockIcon={null}
                    disableClock={true}
                    clearIcon={null}
                  />
                </div>
                <div className="mt-10">
                  <Button
                    className="mr-4 inline-flex items-center gap-2 rounded-md border border-purple-700 px-3 py-1.5 text-sm/6 font-semibold text-purple-800 shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-purple-100 data-open:bg-gray-700 cursor-pointer"
                    onClick={submitForm}
                  >
                    Tolak konsultasi
                  </Button>
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-purple-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-purple-600 data-open:bg-gray-700 cursor-pointer"
                    onClick={submitForm}
                  >
                    Ya, terima
                  </Button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
