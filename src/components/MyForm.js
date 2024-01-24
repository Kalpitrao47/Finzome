import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    weekdays: [],
    gender: '',
    dob: '',
  });

  const [tableData, setTableData] = useState([]);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(day => day !== value)) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editRowIndex !== null) {
      // If editing, update the existing row
      setTableData((prevData) => {
        const updatedData = [...prevData];
        updatedData[editRowIndex] = formData;
        return updatedData;
      });
      setEditRowIndex(null);
    } else {
      // If not editing, add a new row
      setTableData((prevData) => [...prevData, formData]);
    }

    // Clear the form data
    setFormData({
      name: '',
      email: '',
      contact: '',
      weekdays: [],
      gender: '',
      dob: '',
    });

    // Close the modal if open
    setIsModalOpen(false);
  };

  const handleEdit = (index) => {
    // Set the form data to the values of the selected row
    setFormData(tableData[index]);
    // Set the index of the row being edited
    setEditRowIndex(index);
    // Open the modal
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    // Delete the selected row
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
    setEditRowIndex(null);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
      <label htmlFor="name" className="block text-gray-600 font-semibold">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="mt-1 p-2 w-full border rounded-md"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="mt-1 p-2 w-full border rounded-md"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="contact" className="block text-gray-600 font-semibold">Contact</label>
      <input
        type="number"
        id="contact"
        name="contact"
        value={formData.contact}
        onChange={handleInputChange}
        className="mt-1 p-2 w-full border rounded-md"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-600 font-semibold">Weekday (Monday to Friday)</label>
      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
        <div key={day} className="flex items-center">
          <input
            type="checkbox"
            id={day}
            name="weekdays"
            value={day}
            checked={formData.weekdays.includes(day)}
            onChange={handleInputChange}
            className="mr-2"
          />
          <label htmlFor={day} className="mr-4">{day}</label>
        </div>
      ))}
    </div>

    <div className="mb-4">
      <label className="block text-gray-600 font-semibold">Gender (Male and Female)</label>
      <div className="flex items-center">
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          checked={formData.gender === 'Male'}
          onChange={handleInputChange}
          className="mr-2"
        />
        <label htmlFor="male" className="mr-4">Male</label>

        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          checked={formData.gender === 'Female'}
          onChange={handleInputChange}
          className="mr-2"
        />
        <label htmlFor="female">Female</label>
      </div>
    </div>

    <div className="mb-4">
      <label htmlFor="dob" className="block text-gray-600 font-semibold">Date of Birth</label>
      <input
        type="date"
        id="dob"
        name="dob"
        value={formData.dob}
        onChange={handleInputChange}
        className="mt-1 p-2 w-full border rounded-md"
        required
      />
    </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
      </form>

      {tableData.length > 0 && (
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
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{row.name}</td>
                <td className="border p-2">{row.contact}</td>
                <td className="border p-2">{row.email}</td>
                <td className="border p-2">{row.weekdays.join(', ')}</td>
                <td className="border p-2">{row.gender}</td>
                <td className="border p-2">{row.dob}</td>
                <td className="border p-2">
                  <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white p-1 rounded-md mr-1">Edit</button>
                  <button onClick={() => handleDelete(index)} className="bg-red-500 text-white p-1 rounded-md">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal for editing */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Edit Row</h2>
            <form onSubmit={handleSubmit}>
              {/* ... (your form fields with values from formData) */}
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Save</button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-500 text-white p-2 rounded-md ml-2">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyForm;