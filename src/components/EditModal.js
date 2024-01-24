// EditModal.js
import React from 'react';

const EditModal = ({ isOpen, onEdit, onCancel }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Edit Row</h2>
          <form onSubmit={onEdit}>
            {/* ... (your form fields with values from formData) */}
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Save</button>
              <button type="button" onClick={onCancel} className="bg-gray-500 text-white p-2 rounded-md ml-2">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EditModal;
