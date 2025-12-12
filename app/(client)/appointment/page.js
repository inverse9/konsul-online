"use client";
import Dropdown from "@/app/components/Dropdown";
import Modal from "@/app/components/Modal";
import React, { Fragment, useEffect, useState } from "react";
import Dokter from "./Dokter";

const slots = [
  "08:00 - 10:00",
  "10:00 - 12:00",
  "13:00 - 15:00",
  "16:00 - 18:00",
  "19:00 - 21:00",
];
const userString = localStorage.getItem("user");
const user = JSON.parse(userString);
const Appointment = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [idDokter, setIdDokter] = useState(3);
  const [keluhan, setKeluhan] = useState("");
  const [isSubmit, setisSubmit] = useState(false);
  const [dokter, setdokter] = useState([]);
  const [selected, setSelected] = useState({
    id: 3,
    created_at: "2025-10-03T03:32:10.766368+00:00",
    name: "dr. Siti Aminah",
    email: "konselor@gmail.com",
    password: "$2a$12$orF8JaJgF2rs7bzcHyOCFuBJNAwXPQ9pdRXWetWm3Spq7L/QdybRm",
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const submitForm = () => {
    setisSubmit(true);
    submitEmail();
    setIsOpenForm(false);
  };

  const submitEmail = async () => {
    const res = await fetch(`/api/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    if (res.ok) {
      alert(
        "Permohonan anda telah terkirim, silakan pantau email anda untuk step selanjutnya"
      );
    } else {
      alert("Error sending email");
    }
  };

  const getDokter = async () => {
    const res = await fetch(`/api/counselor`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    setdokter(result.data);
    setSelected(result.data[0]);
  };

  useEffect(() => {
    setisSubmit(false);
    setKeluhan("");
  }, [isSubmit]);

  useEffect(() => {
    getDokter();
  }, []);

  useEffect(() => {
    setIdDokter(selected.id);
  }, [selected]);

  return (
    <div className="bg-slate-100 h-dvh grow">
      <h1 className="font-bold text-3xl py-10 px-4 lg:px-20">Pilih Jadwal</h1>
      <div className="flex gap-4 flex-col overflow-y-auto h-4/5 no-scrollbar px-4 lg:px-20 ">
        <div className="h-screen flex items-center">
          {dokter && dokter.length > 0 ? (
            <>
              <div className="w-32 font-semibold">Pilih Dokter :</div>
              <Dropdown
                data={dokter}
                selected={selected}
                setSelected={setSelected}
              />
            </>
          ) : (
            <p className="text-gray-500">
              {dokter ? "Loading..." : "Periksa koneksi anda"}
            </p>
          )}
        </div>
        {slots.map((timeSlot, index) => (
          <Fragment key={index}>
            <div
              onClick={() => {
                setIdDokter(3);
                setIsOpenForm(true);
                setForm({
                  name: user.name,
                  email: "megex41388@lawior.com",
                  title: "Konsultasi",
                  message: `Halo Dr. ${selected.name}, <br/><br/> Saya ${user.name} ingin mengajukan konsultasi dengan keluhan sebagai berikut: <br/><br/> ${keluhan} <br/><br/> Mohon informasikan jadwal konsultasi yang tersedia. Terima kasih.`,
                });
              }}
              className="relative flex border bg-white border-gray-400 p-2 sm:p-4 rounded-md group hover:bg-purple-100 hover:border-slate-500 cursor-pointer shadow"
            >
              <Dokter id={idDokter} timeSlot={timeSlot} />
            </div>
          </Fragment>
        ))}
      </div>
      <Modal
        isOpen={isOpenForm}
        setIsOpen={setIsOpenForm}
        keluhan={keluhan}
        setKeluhan={setKeluhan}
        submitForm={submitForm}
      />
    </div>
  );
};

export default Appointment;
