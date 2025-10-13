import React from "react";

const Table = ({ setIsOpenForm }) => {
  return (
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="border border-gray-200 rounded-lg overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs text-gray-800 uppercase font-semibold"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs text-gray-800 uppercase font-semibold"
                  >
                    Waktu
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs text-gray-800 uppercase font-semibold"
                  >
                    Keluhan
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-end text-xs text-gray-800 uppercase font-semibold"
                  >
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    John Brown
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    12:00 - 14:00
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    perut sakit, mual, pusing
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button
                      type="button"
                      onClick={() => setIsOpenForm(true)}
                      class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 hover:underline focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    >
                      Terima
                    </button>
                    <button
                      type="button"
                      class="ml-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 hover:underline focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    >
                      Tolak
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
