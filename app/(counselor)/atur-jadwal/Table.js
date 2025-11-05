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
                      Hari
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs text-gray-800 uppercase font-semibold"
                    >
                      Jam
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs text-gray-800 uppercase font-semibold"
                    >
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Senin
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <br />
                      12:00 - 14:00
                      <br />
                      14:00 - 16:00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        type="button"
                        onClick={() => setIsOpenForm(true)}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-purple-600 hover:text-purple-800 hover:underline focus:outline-hidden focus:text-purple-800 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="ml-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-purple-600 hover:text-purple-800 hover:underline focus:outline-hidden focus:text-purple-800 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Selasa
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <br />
                      12:00 - 14:00
                      <br />
                      14:00 - 16:00
                      <br />
                      16:00 - 18:00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        type="button"
                        onClick={() => setIsOpenForm(true)}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-purple-600 hover:text-purple-800 hover:underline focus:outline-hidden focus:text-purple-800 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="ml-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-purple-600 hover:text-purple-800 hover:underline focus:outline-hidden focus:text-purple-800 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                      >
                        Delete
                      </button>
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
