import { Box,  CircularProgress, Modal, TextField } from '@mui/material'
import React from 'react'
import { ModalBox, ModalTitle, NoButton, OkButton } from '../styles/Home.styled'

export const PostModal = ({open, handleClose, isEditing, postDetails, handleInputChange, handleSubmit,loading}) => {
  return (
    <Modal open={open} onClose={handleClose}>
    <ModalBox>
      <ModalTitle>
        {isEditing ? 'Editar Post' : 'Crear Nuevo Post'}
      </ModalTitle>

      <TextField
        fullWidth
        margin="normal"
        label="Título"
        name="title"
        value={postDetails.title}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Cuerpo"
        name="body"
        value={postDetails.body}
        onChange={handleInputChange}
      />

      <Box mt={2}>
        <OkButton onClick={handleSubmit} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : isEditing ? 'Editar' : 'Crear'}
        </OkButton>
        <NoButton onClick={handleClose} sx={{ ml: 2 }}>
          Cancelar
        </NoButton>
      </Box>
    </ModalBox>
  </Modal>
  )
}
