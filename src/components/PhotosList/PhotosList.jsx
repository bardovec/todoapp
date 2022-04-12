import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import PhotoItem from './PhotoItem/PhotoItem';

const PhotosList = () => {
  const photo = useSelector((state) => state.photosById);
  return (
    !photo.data ? 'Write the number from 1 to 100' : (
      <Grid container alignItems='stretch' spacing={3}>
        {
              photo.data.map((photo) => (
                <Grid key={photo.id} item xs={12} sm={4}>
                  <PhotoItem photo={photo} />
                </Grid>
              ))
            }
      </Grid>
    // )
    )
  );
};

export default PhotosList;
