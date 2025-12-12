"use client";

import React, { useEffect, useState } from "react";
import Table from "./Table";

const CurrentAppoinment = () => {
  const [isSubmit, setisSubmit] = useState(false);
  const [data, setData] = useState(false);

  const getAppointments = async () => {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    const res = await fetch(`/api/consultations/${user.id}/user`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    setData(result.data);
  };

  useEffect(() => {
    getAppointments();
  }, []);

  useEffect(() => {
    setisSubmit(false);
  }, [isSubmit]);

  return (
    <div className="p-4 grow">
      <div>
        <h1 className="font-semibold text-lg mb-4">Konsultasi Saya</h1>
        {/* <Table data={data} />
         */}
        {data && data.length > 0 ? (
          <Table data={data} />
        ) : (
          /* 2. Show a fallback if empty */
          <p className="text-gray-500">
            {data ? "Tidak ada data konsultasi." : "Loading..."}
          </p>
        )}
      </div>
    </div>
  );
};

export default CurrentAppoinment;
