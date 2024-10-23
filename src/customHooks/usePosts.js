import { useState, useEffect } from 'react';
import { deletePost, editPost, getPosts, postAPost } from '../api/api';
import { useSnackbar } from '../context/SnackbarContext';

export const usePosts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  const [postDetails, setPostDetails] = useState({ title: '', body: '' });
  const [deletingPostId, setDeletingPostId] = useState(null);
  const showSnackbar = useSnackbar();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setData(response.data);
      } catch (err) {
        console.error("Error fetching posts", err);
      }
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (handleClose) => { 
    setLoading(true);
    setError(null);
    const params = {
      title: postDetails.title,
      body: postDetails.body,
    };
    try {
      if (isEditing) {
        const updatedData = await editPost(editingPostId, params, data);
        setData(updatedData);
        showSnackbar('Post editado exitosamente', 'success');
      } else {
        const newData = await postAPost(params, data);
        setData(newData);
        showSnackbar('Post creado exitosamente', 'success');
      }
      handleClose(); // Cierra el modal después del submit
    } catch (error) {
      setError(isEditing ? 'Error al editar el post' : 'Error al crear el post');
      showSnackbar('Error: ' + (isEditing ? 'Error al editar el post' : 'Error al crear el post'), 'error');
      console.error(isEditing ? 'Error al editar el post' : 'Error al crear el post', error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleOpen = (post = null) => {
    if (post) {
      setIsEditing(true);
      setEditingPostId(post.id);
      setPostDetails({ title: post.title, body: post.body });
    } else {
      setIsEditing(false);
      setPostDetails({ title: '', body: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostDetails(prevState => ({ ...prevState, [name]: value }));
  };



  const handleSubmitDelete = async (handleCloseDelete) => {
    setLoading(true);
    setError(null);
    try {
      const updatedData = await deletePost(deletingPostId, data);
      setData(updatedData);
      showSnackbar('Post eliminado exitosamente', 'success');
      handleCloseDelete();
    } catch (error) {
      setError('Error al eliminar el post');
      showSnackbar('Error al eliminar el post', 'error');
      console.error('Error al eliminar el post', error);
    } finally {
      setLoading(false);
    }
  };

  return {
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
    setError,
  };
};
