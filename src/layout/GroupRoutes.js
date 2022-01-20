import React,{Fragment} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useGroupContext } from '../components/ContextComponent';
import SideBar from '../layout/SideBar';
import GroupPage from './GroupPage';

export default function GroupRoutes(){
  const {state, dispatch} = useGroupContext();

  const buildGroupRoutes = () => {
    return state.groups.map((group) => {
      return (
        <Route key={group.query} path={`/${group.query}`} element={<GroupPage group={group}/>} />
      )
    })
  }
  return (  
        <Routes>
          {buildGroupRoutes()}
          <Route path="/" element={<GroupPage group={state.groups[0]}/>} />
        </Routes>
  )
}