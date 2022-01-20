import React from 'react';
import { useGroupContext } from '../components/ContextComponent'
import Grid from '@mui/material/Grid';
import Post from '../components/Post'

export default function GroupFeed({media}){

  const {state,dispatch} = useGroupContext();

  const buildPosts = () => {
    console.log("sissy",state.groups)
    return state.groups[0].members.map((member,i) => {
      const { image, firstname, lastname } = member;
      return <Post pic={image} media={media[i]} first={firstname} last={lastname}/>
    })
  }
  return (
    <Grid item xs={12} md={7}>
      <Grid container direction="column" alignContent="center">
        {buildPosts()}
      </Grid>
    </Grid>
  )
}