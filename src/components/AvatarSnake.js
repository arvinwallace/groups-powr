import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useGroupContext } from './ContextComponent';

export default function AvatarSnake({members}){
  const {state,dispatch} = useGroupContext()

  return (
    <div style={{display:'flex'}}>
      {
        members.map(member => {
          return (
            <Avatar style={{marginRight:'-5px'}} alt={"av"} src={member.image}/>
          )
        })
      }
    </div>
  )
}