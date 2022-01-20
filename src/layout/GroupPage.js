import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import HeroCard from '../components/HeroCard';
import GroupFeed from './GroupFeed';
import GroupAbout from './GroupAbout';
import { styled } from '@mui/material/styles';

const SidePiece = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GroupPage({group}){
  const { pic, name, members } = group;
  console.log("do we have members?", members)
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
          <GroupFeed/>
          <GroupAbout/>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  )
}