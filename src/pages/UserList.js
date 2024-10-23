import React, { useEffect, useState } from 'react';
import { HomeBox, PostsTitle } from '../styles/Home.styled';
import { getUsers } from '../api/api';
import { DataGrid } from '@mui/x-data-grid'; 
import { Box, TextField } from '@mui/material';  

export const UserList = () => {
  const [data, setData] = useState([]);
  const [selectedUsers] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');  
  const [filteredData, setFilteredData] = useState([]); 

  useEffect(() => {
    getUsers()
      .then(response => {
        setData(response.data);
        setFilteredData(response.data); 
      })
      .catch(err => console.error("Error fetching users", err));
  }, []);

  useEffect(() => {
    const filtered = data.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);  

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nombre', width: 300 },
    { field: 'email', headerName: 'Correo Electrónico', width: 300 },
  ];

  return (
    <HomeBox>
      <PostsTitle>Tabla de Usuarios</PostsTitle>
      <TextField
        label="Buscar por nombre o correo"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  
        sx={{ mb: 2, width: '50%', backgroundColor:'white' }}  
      />
      <Box sx={{ height: 700, width: '100%', backgroundColor:'white'  }}>
        <DataGrid
          rows={filteredData} 
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 25]}
          checkboxSelection
          disableSelectionOnClick
          selectionModel={selectedUsers}
        />
      </Box>
    </HomeBox>
  );
};

export default UserList;
