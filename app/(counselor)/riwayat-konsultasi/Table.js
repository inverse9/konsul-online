import React from "react";

const Table = ({ setIsOpenForm }) => {
  return (
    <div>
      <div className="flex flex-col bg-white p-4 rounded-lg shadow-md">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs text-gray-800 uppercase font-semibold"
                    >
                      Nama
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs text-gray-800 uppercase font-semibold"
                    >
                      Hari - Waktu
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs text-gray-800 uppercase font-semibold"
                    >
                      Keluhan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs text-gray-800 uppercase font-semibold"
                    >
                      Kesimpulan & Saran
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Robert
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Senin
                      <br />
                      12:00 - 14:00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      pusing tidak bisa tidur
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        type="button"
                        onClick={() => setIsOpenForm(true)}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-purple-600 hover:text-purple-800 hover:underline focus:outline-hidden focus:text-purple-800 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                      >
                        Tambahkan saran/kesimpulan
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Ferguso
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Senin
                      <br />
                      12:00 - 14:00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      pusing tidak bisa tidur
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      olahraga yang rutin
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
