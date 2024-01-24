// Table.js
import React from "react";

const Table = ({ data, onEdit, onDelete }) => {
  return (
    // <table className="mt-8 w-full border-collapse border border-gray-800">
    //   {/* ... (your table structure) */}
    //   <tbody>
    //     {data.map((row, index) => (
    //       <tr key={index}>
    //         {/* ... (your table cells with data) */}
    //         <td className="border p-2">
    //           <button onClick={() => onEdit(index)} className="bg-blue-500 text-white p-1 rounded-md mr-1">Edit</button>
    //           <button onClick={() => onDelete(index)} className="bg-red-500 text-white p-1 rounded-md">Delete</button>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <table className="mt-8 w-full border-collapse border border-gray-800">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">S.No</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Contact</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Weekday</th>
          <th className="border p-2">Gender</th>
          <th className="border p-2">DOB</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border p-2">{index + 1}</td>
            <td className="border p-2">{row.name}</td>
            <td className="border p-2">{row.contact}</td>
            <td className="border p-2">{row.email}</td>
            <td className="border p-2">
              {row.weekdays ? row.weekdays.join(", ") : ""}
            </td>{" "}
            <td className="border p-2">{row.gender}</td>
            <td className="border p-2">{row.dob}</td>
            <td className="border p-2">
              <button
                onClick={() => onEdit(index)}
                className="bg-blue-500 text-white p-1 rounded-md mr-1"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(index)}
                className="bg-red-500 text-white p-1 rounded-md"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
