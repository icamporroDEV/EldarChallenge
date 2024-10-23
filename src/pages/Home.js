import React, { useState } from 'react';
import { Typography, Button, Tooltip } from '@mui/material';
import { AddBox, CardIconBox, HomeBox,  PostsTitle, PostsTitleBox } from '../styles/Home.styled';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { PostModal } from '../components/PostModal';
import { PostDeleteModal } from '../components/PostDeleteModal';
import { usePosts } from '../customHooks/usePosts';
// eslint-disable-next-line
import { PostCards } from '../components/PostCards';
import { useAuth } from '../context/AuthContext';
export const Home = () => {
  const { user } = useAuth();
  const {
    data,
    loading,
    error,
    isEditing,
    postDetails,
    handleSubmit,
    handleOpen,
    handleInputChange,
    handleSubmitDelete,
    setDeletingPostId,
  } = usePosts();

  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleClose = () => setOpen(false);
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <HomeBox>
      <Typography>Bienvenido, {user ? user.nombre : 'Invitado'}</Typography>
      {error && <Typography color="error">{error}</Typography>}

      <PostModal
      open={open}
      handleClose={handleClose}
      isEditing={isEditing}
      postDetails={postDetails}
      handleInputChange={handleInputChange}
      handleSubmit={() => handleSubmit(handleClose)} 
      loading={loading}
    />


      <PostDeleteModal
        open={openDelete}
        handleClose={handleCloseDelete}
        handleSubmit={() => handleSubmitDelete(handleCloseDelete)}
        loading={loading}
      />

      <PostsTitleBox>
        <PostsTitle>Lista de Posts</PostsTitle>
      
        {user && user.role === 'admin' && (
          <AddBox>
            <Tooltip title="Crear un nuevo Post" placement="right" arrow disableInteractive>
              <Button onClick={() => { handleOpen(); setOpen(true); }}>
                <CardIconBox>
                  <AddBoxIcon />
                </CardIconBox>
              </Button>
            </Tooltip>
          </AddBox>
        )}
      </PostsTitleBox>

      <PostCards
        data={data} 
        handleOpen={(post) => { handleOpen(post); setOpen(true); }} 
        handleOpenDelete={(postId) => { 
          setDeletingPostId(postId); 
          setOpenDelete(true); 
        }} 
        user={user} 
      />
    </HomeBox>
  );
};

export default Home;
