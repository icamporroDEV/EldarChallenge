import React, { useState } from 'react';
import { Divider, Drawer, ListItem, ListItemText, useMediaQuery, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MenuIcon from '@mui/icons-material/Menu'; // Ícono del menú
import { DrawerList, IconBox, IconText } from '../styles/Drawer.styled';
import { useAuth } from '../context/AuthContext';

export const DrawerComponent = () => {
  const navigate = useNavigate();
  const user = useAuth();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const drawerWidth = 150;

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };
  const drawer = (
    <>
      <Divider />
      <DrawerList>
      {user && user.user.role === 'admin' && (
        <ListItem button onClick={() => navigate('/user-list')}>
          <ListItemText
             primary={
              <IconBox>
                <AccountCircleRoundedIcon />
                <IconText>Usuarios</IconText>
                </IconBox>
                }
              />
            </ListItem>
      )}
  
        {/* <ListItem button onClick={() => navigate('/photos')}>
          <ListItemText
            primary={
              <IconBox>
                <PhotoCameraIcon />
                <IconText>Fotos</IconText>
              </IconBox>
            }
          />
        </ListItem> */}
        <ListItem button onClick={() => navigate('/home')}>
          <ListItemText
            primary={
              <IconBox>
                <HomeRoundedIcon />
                <IconText>Inicio</IconText>
              </IconBox>
            }
          />
        </ListItem>
        <ListItem button onClick={() => navigate('/login')}>
          <ListItemText
            primary={
              <IconBox>
                <LogoutRoundedIcon />
                <IconText>Salir</IconText>
              </IconBox>
            }
          />
        </ListItem>
      </DrawerList>
    </>
  );

  return (
    <>
      {isMobile ? (
        <>
        {!open&&  <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              position: 'fixed', 
              left: 0, 
              top: '50%' ,
              zIndex: 1201,
              backgroundColor: 'white', 
              borderRadius: '50%', 
            }}
          >
            <MenuIcon />
          </IconButton>}
          <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                backgroundColor: '#40356E',
                color: 'black',
              },
            }}
          >
            {drawer}
          </Drawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          open={true}
          PaperProps={{
            sx: {
              backgroundColor: '#40356E',
              color: 'black',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};
