import React from 'react';
import Grid from '@mui/material/Grid';
import AboutCard from '../components/AboutCard';
import RecentMedia from '../components/RecentMedia';

export default function GroupFeed(){
  return (
    <Grid item xs={12} md={5}>
      <Grid container direction="column" alignContent="center">
        <AboutCard/>
        <RecentMedia/>
      </Grid>
    </Grid>
  )
}