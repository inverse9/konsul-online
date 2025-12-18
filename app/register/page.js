"use client";

import { Button } from "@headlessui/react";
import React, { useState } from "react";
import { redirect, RedirectType } from "next/navigation";

const Register = () => {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    level: "pasien",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const result = await res.json();
    if (res.ok) {
      alert("register success");
      redirect("/login", RedirectType.replace);
    } else {
      alert("register failed: " + result.error);
    }
    setLoading(false);

    setMessage(result.message || result.error);
  };

  return (
    <div className="flex h-dvh">
      <div className="hidden bg-purple-500 sm:flex items-center justify-center sm:w-1/3 lg:w-2/5">
        <img src="/logo.png" className="size-52 lg:size-72" alt="" />
      </div>
      <div className="bg-white grow flex flex-col h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-center text-purple-500 mb-2">
            Register
          </h1>
          <h1 className="text-md font-bold uppercase mt-4">
            Daftar untuk bergabung
          </h1>
          <form
            onSubmit={submitForm}
            className="w-full flex flex-col items-center"
          >
            <div className="mt-4 p-4 flex flex-col w-full lg:w-2/3">
              Isikan form berikut untuk membuat akun baru
              <input
                type="text"
                placeholder="Nama"
                value={credentials.name}
                onChange={(e) =>
                  setcredentials({ ...credentials, name: e.target.value })
                }
                className="mt-4 px-3 focus:ring-2 focus:ring-transparent focus:outline-none focus:border-purple-700 py-2 rounded-full border"
              />
              <input
                type="text"
                placeholder="Email"
                value={credentials.email}
                onChange={(e) =>
                  setcredentials({ ...credentials, email: e.target.value })
                }
                className="my-4 px-3 focus:ring-2 focus:ring-transparent focus:outline-none focus:border-purple-700 py-2 rounded-full border"
              />
              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) =>
                  setcredentials({ ...credentials, password: e.target.value })
                }
                className="px-3 focus:ring-2 focus:ring-transparent focus:outline-none focus:border-purple-700 py-2 rounded-full border"
              />
            </div>
            <div className="w-full lg:w-2/3 px-4">
              <Button
                type="submit"
                className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-purple-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-purple-600 data-open:bg-purple-700 w-full justify-center"
              >
                Daftar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
