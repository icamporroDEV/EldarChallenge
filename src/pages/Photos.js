import React, { useEffect, useState } from 'react';
import { Grid, Box, CircularProgress, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component'; 
import { getPhotos } from '../api/api';

const Photos = () => {
  const [data, setData] = useState([]); 
  const [visiblePhotos, setVisiblePhotos] = useState([]); 
  const [page, setPage] = useState(0); 
  const [isLoading, setIsLoading] = useState(false); 
  const photosPerPage = 50; 

  useEffect(() => {
    getPhotos()
      .then(response => {
        setData(response.data); 
        setVisiblePhotos(response.data.slice(0, photosPerPage)); 
      })
      .catch(err => console.error("Error fetching photos", err));
  }, []);

  const fetchMorePhotos = () => {
    if (isLoading) return; 

    setIsLoading(true); 
    const nextPage = page + 1; 
    const start = photosPerPage * nextPage; 

    const newPhotos = data.slice(start, start + photosPerPage); 
    setVisiblePhotos(prevPhotos => [...prevPhotos, ...newPhotos]); 
    setPage(nextPage); 
    setIsLoading(false); 
  };

  const hasNextPage = visiblePhotos.length < data.length; 
  const hasMore = !isLoading && hasNextPage; 

  return (
    <Box sx={{ padding: '16px', marginLeft: '160px', paddingLeft:'10px', marginRight: '50px' }}>
      <InfiniteScroll
        dataLength={visiblePhotos.length} 
        next={fetchMorePhotos} 
        hasMore={hasMore} 
        loader={<CircularProgress />} 
        scrollThreshold={0.9} 
        endMessage={<Typography>No hay más fotos</Typography>} 
      >
        <Grid container spacing={2}>
          {visiblePhotos.map((photo) => (
            <Grid item xs={6} sm={4} md={3} key={photo.id}>
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default Photos;
