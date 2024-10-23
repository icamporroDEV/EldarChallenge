import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments, getPost } from '../api/api'; 
import { CircularProgress, Typography,  Card, CardContent, Divider } from '@mui/material';
import { HomeBox } from '../styles/Home.styled';

const PostComments = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await getPost(id); 
        const commentsResponse = await getComments(id); 
        setPost(postResponse.data); 
        setComments(commentsResponse.data); 
      } catch (err) {
        setError('Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <HomeBox>
      <Typography variant="h4" gutterBottom>Post Original </Typography>
      {post && (
        <Card sx={{ marginBottom: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>{post.title}</Typography>
            <Typography variant="body1">{post.body}</Typography>
          </CardContent>
        </Card>
      )}

      <Typography variant="h5" gutterBottom>Comentarios ({comments.length})</Typography>

      {comments.length === 0 ? (
        <Typography>No hay comentarios.</Typography>
      ) : (
        comments.map(comment => (
          <Card key={comment.id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6">{comment.name}</Typography>
              <Divider sx={{ marginY: 1 }} />
              <Typography variant="body2">{comment.body}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </HomeBox>
  );
};

export default PostComments;
