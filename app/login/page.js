"use client";

import { Button } from "@headlessui/react";
import React, { useState } from "react";
import { redirect, RedirectType } from "next/navigation";

const Login = () => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (credentials.email === "konselor")
      redirect("/jadwal", RedirectType.replace);
    else {
      redirect("/current-appointments", RedirectType.replace);
    }
  };

  return (
    <div className="flex h-dvh">
      <div className="bg-purple-500  lg:w-2/5"></div>
      <div className="bg-white grow flex flex-col h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-center text-purple-500 mb-2">
            Login
          </h1>
          <h1 className="text-md font-bold uppercase mt-4">
            Selamat Datang Kembali
          </h1>
          <form
            onSubmit={submitForm}
            className="w-full flex flex-col items-center"
          >
            <div className="mt-4 p-4 flex flex-col w-1/2">
              Silakan masuk ke akun Anda
              <input
                type="text"
                placeholder="Email"
                value={credentials.email}
                onChange={(e) =>
                  setcredentials({ ...credentials, email: e.target.value })
                }
                className="px-2 py-1 mb-4 rounded-md border"
              />
              <input
                type="text"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) =>
                  setcredentials({ ...credentials, password: e.target.value })
                }
                className="px-2 py-1 rounded-md border"
              />
            </div>
            <div className=" w-1/2 px-4">
              <Button
                type="submit"
                className="cursor-pointer inline-flex items-center gap-2 rounded-md bg-purple-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-purple-600 data-open:bg-purple-700"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
