import React from 'react';
import Grid from '@mui/material/Grid';
import AboutCard from '../components/AboutCard';
import RecentMedia from '../components/RecentMedia';

export default function GroupAbout({media,about,name}){
  return (
    <Grid item xs={12} md={5}>
      <Grid container direction="column" alignContent="center">
        <AboutCard name={name} about={about}/>
        <RecentMedia media={media}/>
      </Grid>
    </Grid>
  )
}