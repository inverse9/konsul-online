"use client";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import Modal from "./Modal";

const AturJadwal = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isSubmit, setisSubmit] = useState(false);
  const [isOpenModal, setisOpenModal] = useState(false);

  useEffect(() => {
    setisSubmit(false);
  }, [isSubmit]);

  return (
    <div className="p-4 grow">
      <div>
        <h1 className="font-semibold text-lg mb-4">Jadwal Saya</h1>
        <button
          onClick={() => setisOpenModal(true)}
          className="px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-400 cursor-pointer text-white mb-4"
        >
          Tambah Jadwal
        </button>
        <Table setIsOpenForm={setIsOpenForm} />
      </div>
      <Modal isOpen={isOpenModal} setIsOpen={setisOpenModal} />
    </div>
  );
};

export default AturJadwal;
