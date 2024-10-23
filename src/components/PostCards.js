import {  Button,  Tooltip } from '@mui/material';
import { Grid } from '@mui/system';
import React from 'react';
import { CardBody, CardButtonsBox, CardContentBox, CardIconBox, CardStyled, CardTitle, CardTitleBox } from '../styles/Home.styled';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom'; 

export const PostCards = ({ data, user, loading, handleOpen, handleOpenDelete }) => {
  return (
    <Grid container spacing={3} mt={3}>
      {data?.map(post => (
        <Grid item xs={12} sm={6} md={4} key={post?.id}>
      
          <CardStyled>
            <CardContentBox>
            <Link to={`/posts/${post.id}/comments`} style={{ textDecoration: 'none' }}>
              <CardTitleBox>
                <CardTitle>{post?.title}</CardTitle>
                <CardBody>
                {post?.body}
              </CardBody>
           
              </CardTitleBox>
              </Link>
                  
            {user && user.role === 'admin' && (
              <CardButtonsBox>
                  <Tooltip title="Borrar post" placement="right" arrow disableInteractive>
                    <Button onClick={() => handleOpenDelete(post.id)} disabled={loading}>
                      <CardIconBox>
                        <DeleteForeverIcon />
                      </CardIconBox>
                    </Button>
                  </Tooltip>
                  <Tooltip title="Editar Post" placement="right" arrow disableInteractive>
                    <Button onClick={() => handleOpen(post)} disabled={loading}>
                      <CardIconBox>
                        <EditNoteIcon />
                      </CardIconBox>
                    </Button>
                  </Tooltip>
                </CardButtonsBox>
             )}
            </CardContentBox>
          </CardStyled>
      
        </Grid>
      ))}
    </Grid>
  );
};
