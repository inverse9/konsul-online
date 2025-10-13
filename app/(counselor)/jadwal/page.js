"use client";
import React, { useState } from "react";
import Table from "./Table";
import Modal from "./Modal";

const page = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  return (
    <div className="p-4">
      <div>
        <Table setIsOpenForm={setIsOpenForm} />
      </div>
      <Modal
        isOpen={isOpenForm}
        setIsOpen={setIsOpenForm}
        // setisSubmit={setisSubmit}
      />
    </div>
  );
};

export default page;
