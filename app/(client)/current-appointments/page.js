"use client";

import React, { useEffect, useState } from "react";
import Table from "./Table";

const CurrentAppoinment = () => {
  const [isSubmit, setisSubmit] = useState(false);

  useEffect(() => {
    setisSubmit(false);
  }, [isSubmit]);

  return (
    <div className="p-4 grow">
      <div>
        <h1 className="font-semibold text-lg mb-4">Konsultasi Saya</h1>

        <Table />
      </div>
    </div>
  );
};

export default CurrentAppoinment;
