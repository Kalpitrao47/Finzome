// App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import EditModal from './components/EditModal';


const App = () => {
  const [tableData, setTableData] = useState([]);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (formData) => {
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
    setIsModalOpen(false);
  };

  const handleEdit = (index) => {
    setEditRowIndex(index);
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
    setEditRowIndex(null);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <Form onSubmit={handleFormSubmit} />

      {tableData.length > 0 && (
        <Table data={tableData} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      <EditModal
        isOpen={isModalOpen}
        onEdit={() => { /* handle edit logic */ }}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default App;
