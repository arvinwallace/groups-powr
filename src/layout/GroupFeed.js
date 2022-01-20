import React from 'react';
import { useGroupContext } from '../components/ContextComponent'
import Grid from '@mui/material/Grid';
import Post from '../components/Post'

export default function GroupFeed(){

  const {state,dispatch} = useGroupContext();

  const buildPosts = () => {
    return state.groups[0].members.map((member) => {
      const { image, firstname, lastname } = member;
      return <Post pic={image} first={firstname} last={lastname}/>
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