import React,{ useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import SearchField from '../components/SearchField'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GroupCard from '../components/GroupCard';
import { useGroupContext } from '../components/ContextComponent'
import { useGroupPic } from '../hooks/useGroupPic'
import { useGetUsers } from '../hooks/useGetUsers';

const BarContainer = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

export default function SideBar(){
  const {state, dispatch} = useGroupContext();

  console.log("GroupCard rendered", state.currentUser)

  // useGroupPic(state,dispatch)
  useGetUsers(dispatch)

  const buildGroupCards = () => {
    return state.groups.map((group,i) => {
      return (
        <GroupCard
          key={group.query}
          destination={group.query}
          source={group.pic}
          name={group.name}
          last={group.bla}
        />
      )
    })
  }
  return (
    <BarContainer>
      <Grid container direction="column" >
        <h2>Groups</h2>
        <SearchField/>
        {buildGroupCards()}
      </Grid>
    </BarContainer>
  )
}