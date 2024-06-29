"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Page() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({
    id: '',
    name: '',
    age: '',
    city: ''
  });
  const [deleteId, setDeleteId] = useState(null);
  const [filterCity, setFilterCity] = useState('');
  const [sortOrder, setSortOrder] = useState({
    field: '',
    order: ''
  });


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data.map(user => ({
          id: user.id,
          name: user.name,
          age: Math.floor(Math.random() * 40) + 20, // Generate random age for demonstration
          city: user.address.city,
        }));
        setData(users);
        setFilteredData(users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEditClick = (rowData) => {
    setSelectedData(rowData);
    setIsEditPopupOpen(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setIsDeletePopupOpen(true);
  };

  const confirmDelete = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${deleteId}`)
      .then(() => {
        const newData = data.filter(row => row.id !== deleteId);
        setData(newData);
        setFilteredData(newData);
        setIsDeletePopupOpen(false);
        setDeleteId(null);
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    const { id, name, age, city } = selectedData;

    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, { name, age, city })
      .then(() => {
        const newData = data.map(row => 
          row.id === id ? { ...row, name, age, city } : row
        );
        setData(newData);
        setFilteredData(newData);
        setIsEditPopupOpen(false);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  const handleCloseEditPopup = () => {
    setIsEditPopupOpen(false);
    setSelectedData({
      id: '',
      name: '',
      age: '',
      city: ''
    });
  };

  const handleCloseDeletePopup = () => {
    setIsDeletePopupOpen(false);
    setDeleteId(null);
  };

  const handleFilterChange = (e) => {
    const city = e.target.value;
    setFilterCity(city);
    setFilteredData(
      city ? data.filter(row => row.city === city) : data
    );
  };

  const handleSort = (field) => {
    const order = sortOrder.field === field && sortOrder.order === 'asc' ? 'desc' : 'asc';
    const sortedData = [...filteredData].sort((a, b) => {
      if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
      return 0;
    });
    setSortOrder({ field, order });
    setFilteredData(sortedData);
  };

  const uniqueCities = [...new Set(data.map(row => row.city))];

  return (
    <div className="container card">
      <div className="card-header border-bottom-0">
        <div className='row align-items-center'>

<div className='col-lg-3 col-md-6 pe-md-0 mb-2 mb-lg-0 mx-4'>

        <select 
        className='form-select'
        value={filterCity} onChange={handleFilterChange}>
          <option value="">Filter by City</option>
          {uniqueCities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        </div>

        <button 
        className='btn col-lg-3 col-md-6 pe-md-0 mb-2 mb-lg-0 mx-4 btn-outline-primary'
        onClick={() => handleSort('name')}>
          Sort by Name {sortOrder.field === 'name' && (sortOrder.order === 'asc' ? '▲' : '▼')}
        </button>
        <button 
                className='btn col-lg-3 col-md-6 pe-md-0 mb-2 mb-lg-0 mx-4 btn-outline-primary'
        onClick={() => handleSort('age')}>
          Sort by Age {sortOrder.field === 'age' && (sortOrder.order === 'asc' ? '▲' : '▼')}
        </button>
        </div>
      </div>

      <div className='table-responsive'>
      <table className='table mb-0 text-nowrap table-hover table-centered table-with-checkbox'>
        <thead className='table-light'>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
              <td>
                <button className="btn bg-success mx-2 text-white"
                onClick={() => handleEditClick(row)}>Edit</button>
                <button 
                className='btn bg-danger mx-2 text-white'
                onClick={() => handleDeleteClick(row.id)}>
                  Delete
                  </button>
              </td>
            </tr>
          ))}
        
      </table>
      </div>

      {isEditPopupOpen && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Edit Data</h2>
            <form>
              <div>
                <label>Name: </label>
                <input
                  type="text"
                  name="name"
                  value={selectedData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Age: </label>
                <input
                  type="number"
                  name="age"
                  value={selectedData.age}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>City: </label>
                <input
                  type="text"
                  name="city"
                  value={selectedData.city}
                  onChange={handleInputChange}
                />
              </div>
              <button type="button" onClick={handleSaveClick}>Save</button>
              <button type="button" onClick={handleCloseEditPopup}>Close</button>
            </form>
          </div>
        </div>
      )}

      {isDeletePopupOpen && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this record?</p>
            <button type="button" onClick={confirmDelete}>Yes</button>
            <button type="button" onClick={handleCloseDeletePopup}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
