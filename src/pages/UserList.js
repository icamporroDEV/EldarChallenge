import React, { useEffect, useState } from 'react';
import { HomeBox, PostsTitle } from '../styles/Home.styled';
import { getUsers } from '../api/api';
import { DataGrid } from '@mui/x-data-grid'; 
import { Box } from '@mui/material';  

export const UserList = () => {
  const [data, setData] = useState([]);
  const [selectedUsers] = useState([]); 

  useEffect(() => {
    getUsers()
      .then(response => setData(response.data))
      .catch(err => console.error("Error fetching users", err));
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nombre', width: 300 },
    { field: 'email', headerName: 'Correo Electrónico', width: 300 },
  ];


  return (
    <HomeBox>
      <PostsTitle>Tabla de Usuarios</PostsTitle>
      <Box sx={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={data}
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
