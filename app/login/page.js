import React from "react";

const Login = () => {
  return (
    <div className="flex h-dvh">
      <div className="bg-purple-500 w-2/5"></div>
      <div className="grow flex flex-col h-full">
        <div className="flex flex-col bg-red-200 justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-center text-purple-500 mb-2">
            Login
          </h1>
          <h1 className="text-xl font-bold uppercase">
            Selamat Datang Kembali
          </h1>
          <div className="bg-green-200 mt-4 p-4 flex flex-col gap-y-2 w-1/2">
            Silakan masuk ke akun Anda
            <input
              type="text"
              placeholder="Username"
              className="px-2 py-1 rounded-md border"
            />
            <input
              type="text"
              placeholder="Password"
              className="px-2 py-1 rounded-md border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
