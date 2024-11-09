"use client";
import React, { useState } from "react";

const Attendance = () => {
  // Sample attendance data
  const attendanceData = [
    {
      id: 1,
      name: "John Doe",
      date: "2024-11-01",
      status: "Present",
      loginTime: "09:00 AM",
      logoutTime: "06:00 PM",
      workType: "Full-time",
      workingHours: 8,
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "2024-11-02",
      status: "Absent",
      loginTime: "-",
      logoutTime: "-",
      workType: "-",
      workingHours: 0,
    },
    {
      id: 3,
      name: "Michael Johnson",
      date: "2024-11-03",
      status: "Present",
      loginTime: "09:30 AM",
      logoutTime: "05:30 PM",
      workType: "Full-time",
      workingHours: 8,
    },
    {
      id: 4,
      name: "Emily Davis",
      date: "2024-11-04",
      status: "Late",
      loginTime: "10:30 AM",
      logoutTime: "03:30 PM",
      workType: "Half-time",
      workingHours: 5,
    },
    {
      id: 5,
      name: "Chris Lee",
      date: "2024-11-05",
      status: "Present",
      loginTime: "09:00 AM",
      logoutTime: "06:00 PM",
      workType: "Full-time",
      workingHours: 8,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Filtered data based on search and dropdown selection
  const filteredData = attendanceData.filter((record) => {
    const matchesSearch = record.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "" || record.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="mt-3">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Attendance
        </h2>

        <div className="flex gap-4 flex-wrap content-center justify-between">
          <div className="flex gap-4 content-center flex-wrap">
            <div>
              <label className="mr-2">Form</label>
              <input
                type="date"
                className="border-2 border-black/50 px-3 py-1"
              />
            </div>
            <div>
              <label>---</label>
            </div>
            <div>
              <label className="mr-2">To</label>
              <input
                type="date"
                className="border-2 border-black/50 px-3 py-1"
              />
            </div>

            <div>
              <button className="bg-blue-700 text-white p-2 rounded-md">
                Download pdf
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              {/* Status Dropdown */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border-2 border-gray-300 px-3 w-[200px] py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Status</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Late">Late</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mt-5">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-3 px-4 text-gray-600 font-medium">#</th>
                {/* <th className="py-3 px-4 text-gray-600 font-medium">Name</th> */}
                <th className="py-3 px-4 text-gray-600 font-medium">Date</th>
                <th className="py-3 px-4 text-gray-600 font-medium">Status</th>
                <th className="py-3 px-4 text-gray-600 font-medium">
                  Login Time
                </th>
                <th className="py-3 px-4 text-gray-600 font-medium">
                  Logout Time
                </th>
                <th className="py-3 px-4 text-gray-600 font-medium">
                  Work Type
                </th>
                <th className="py-3 px-4 text-gray-600 font-medium">
                  Working Hours
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((record) => (
                  <tr
                    key={record.id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4">{record.id}</td>
                    {/* <td className="py-3 px-4">{record.name}</td> */}
                    <td className="py-3 px-4">{record.date}</td>
                    <td
                      className={`py-3 px-4 font-medium ${
                        record.status === "Present"
                          ? "text-green-600"
                          : record.status === "Absent"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {record.status}
                    </td>
                    <td className="py-3 px-4">{record.loginTime}</td>
                    <td className="py-3 px-4">{record.logoutTime}</td>
                    <td className="py-3 px-4">{record.workType}</td>
                    <td className="py-3 px-4">{record.workingHours} hrs</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-gray-500">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
