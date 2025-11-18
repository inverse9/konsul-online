import React from "react";

const Table = () => {
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
                      Dokter
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
                      Kesimpulan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs text-gray-800 uppercase font-semibold"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Md. Bayu Praditya Larahati M.Psi, Psikolog
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      Selesai
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Dewi Ratih Tresna, M.Psi
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Senin
                      <br />
                      12:00 - 14:00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Sakit kepala sebelah
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      -
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      Pending
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
