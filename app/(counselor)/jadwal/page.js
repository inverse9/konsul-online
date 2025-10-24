"use client";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import Modal from "./Modal";
import ModalDesc from "./ModalDesc";

const Jadwal = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [desc, setDesc] = useState("");
  const [isSubmit, setisSubmit] = useState(false);
  const [isOpenDesc, setIsOpenDesc] = useState(false);

  useEffect(() => {
    setisSubmit(false);
    setDesc("");
  }, [isSubmit]);

  return (
    <div className="p-4 grow">
      <div>
        <Table setIsOpenForm={setIsOpenForm} />
      </div>
      <Modal
        isOpen={isOpenForm}
        setIsOpen={setIsOpenForm}
        setisopendesc={setIsOpenDesc}
      />

      <ModalDesc
        isOpen={isOpenDesc}
        setIsOpen={setIsOpenDesc}
        desc={desc}
        setDesc={setDesc}
        setisSubmit={setisSubmit}
      />
    </div>
  );
};

export default Jadwal;
