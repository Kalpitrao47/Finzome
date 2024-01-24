// Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    weekdays: [],
    gender: '',
    dob: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(day => day !== value)) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      contact: '',
      weekdays: [],
      gender: '',
      dob: '',
    });
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   {/* ... (your form fields with values from formData) */}
    //   <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
    // </form>
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
  );
};

export default Form;
