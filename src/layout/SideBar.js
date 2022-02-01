import React,{ useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import SearchField from '../components/SearchField'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GroupCard from '../components/GroupCard';
import { useGroupContext } from '../components/ContextComponent'
import { useGroupPic } from '../hooks/useGroupPic'
import { useGetUsers } from '../hooks/useGetUsers';


const newGroup = {
  collection:[],
  name: "Dog Walkers",
  about: "The dog or domestic dog is a domesticated descendant of the wolf which is characterized by an upturning tail. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative.",
  members:[],
  query: "dogs",
  bla: "4 days ago",
  pic: "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
}

const BarContainer = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

export default function SideBar(){
  const {state, dispatch} = useGroupContext();

  console.log("GroupCard rendered", state.currentUser)

  useGroupPic(state,dispatch)
  useGetUsers(state,dispatch)

  const handleThing = () => {
    console.log("dispatching new group")
    dispatch({
      type: "NEW_GROUP",
      payload: newGroup,
      callback: getTheThings
    })
  }

  const getTheThings = () => {
    useGroupPic(state,dispatch)
    useGetUsers(dispatch)
  }

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
        {/* <button onClick={handleThing} style={{height: '100px'}}/> */}
      </Grid>
    </BarContainer>
  )
}