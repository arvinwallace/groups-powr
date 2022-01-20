import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import HeroCard from '../components/HeroCard';
import GroupFeed from './GroupFeed';
import GroupAbout from './GroupAbout';
import { styled } from '@mui/material/styles';


export default function GroupPage({group}){
  const { pic, name, members } = group;
  return (
    <Grid item xs={12} sm={8} md={9}>
    <Grid container direction="column">
      {/* HERO */}
      <Grid item xs={12}>
        <HeroCard groupName={name} image={pic} members={members}/>
      </Grid>
      {/* MAIN CONTENT */}
      <Grid item xs={12}>
        <Grid container>
          <GroupFeed media={group.collection}/>
          <GroupAbout about={group.about} media={group.collection}/>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  )
}