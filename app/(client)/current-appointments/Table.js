import React from "react";

const Table = ({ data }) => {
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
                  {data.map((a, b) => (
                    <tr key={a.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {a.counselor.name}{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {a.schedule_day.day}
                        <br />
                        {a.schedule_time.start} - {a.schedule_time.end}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {a.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {a.conclusion ? a.conclusion : "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {a.status == 1 ? "Selesai" : "Menunggu"}
                      </td>
                    </tr>
                  ))}
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
