import React from 'react';
import Grid from '@mui/material/Grid';
import Post from '../components/Post'

export default function GroupFeed(){
  return (
    <Grid item xs={12} md={7}>
      <Grid container direction="column" alignContent="center">
        <Post/>
        <Post/>
      </Grid>
    </Grid>
  )
}