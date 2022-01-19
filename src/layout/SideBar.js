import React,{ useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import SearchField from '../components/SearchField'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GroupCard from '../components/GroupCard';
import { useGroupContext } from '../components/ContextComponent'
import { useGroupPic } from '../hooks/useGroupPic'

const BarContainer = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  minHeight: '100vh'
}));

export default function SideBar({query="cats"}){
  const {state, dispatch} = useGroupContext();
  useEffect(() => {
    dispatch({
      type:'increment'
    })
  },[])
  const pic = useGroupPic(query)
  console.log(state)

  return (
    <BarContainer>
      <Grid container direction="column">
        <h2>Groups</h2>
        <SearchField/>
        <GroupCard
          source={pic}
          name="Cattle Ranchers"
          last="3 hours ago"
        />
      </Grid>
    </BarContainer>
  )
}