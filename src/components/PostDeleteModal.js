import { Box,  CircularProgress, Modal, } from '@mui/material'
import React from 'react'
import { ModalBox, ModalTitle, NoButton, OkButton } from '../styles/Home.styled'

export const PostDeleteModal = ({open, handleClose, handleSubmit,loading}) => {
  return (
    <Modal open={open} onClose={handleClose}>
    <ModalBox>
      <ModalTitle>
       ¿Estás seguro de borrar el post?
      </ModalTitle>

      <Box mt={2}>
        <OkButton onClick={handleSubmit} disabled={loading}>
          {loading ? <CircularProgress size={24} /> :  'Confirmar' }
        </OkButton>
        <NoButton onClick={handleClose} sx={{ ml: 2 }}>
          Cancelar
        </NoButton>
      </Box>
    </ModalBox>
  </Modal>
  )
}
