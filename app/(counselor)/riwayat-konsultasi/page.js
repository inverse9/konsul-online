"use client";

import React, { useEffect, useState } from "react";
import Table from "./Table";
import Modal from "./Modal";

const RiwayatKonsultasi = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isSubmit, setisSubmit] = useState(false);
  const [isOpenModal, setisOpenModal] = useState(false);

  useEffect(() => {
    setisSubmit(false);
  }, [isSubmit]);

  return (
    <div className="p-4 grow">
      <div>
        <h1 className="font-semibold text-lg mb-4">Riwayat Konsultasi</h1>

        <Table setIsOpenForm={setIsOpenForm} />
      </div>
      <Modal isOpen={isOpenModal} setIsOpen={setisOpenModal} />
    </div>
  );
};

export default RiwayatKonsultasi;
