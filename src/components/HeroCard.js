import React,{ useEffect, useState } from 'react';
import { useGroupContext } from '../components/ContextComponent'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import LoadingButton from '@mui/lab/LoadingButton';
import AvatarSnake from './AvatarSnake';
import NewGroupButton from './NewGroupModal';

export default function HeroCard({image, groupName, members}) {

  const { state,dispatch } = useGroupContext()
  const [memberNumbers,setMemberNumbers] = useState()
  const [groupMembers,setGroupMembers] = useState(() => members)
  const [buttonText, setButtonText] = useState({join:"Leave Group", member: "Member"})

  useEffect(() => {
    setMemberNumbers(members.length)
    setGroupMembers(members)
    if(members.length === 10){
      setButtonText({join:"Leave Group", member: "Member"})
    } 
    if(members.length < 10){
      setButtonText({join:"Join Group", member: "Not a Member"})
    }
  }, [members.length, groupName])

  const toggleMembership = () => {
    if(memberNumbers < 10) {
      dispatch({
        type: 'ADD_MEMBER',
        payload: groupName
      })
      setMemberNumbers(prev => prev + 1)
      setGroupMembers(members)
      setButtonText({join:"Leave Group", member: "Member"})
    } else {
      dispatch({
        type: 'TOGGLE_MEMBERS',
        payload: groupName
      })
      setMemberNumbers(prev => prev - 1)
      setGroupMembers(prev => {
        console.log("pref", prev, state.currentUser.firstname)
        const goose = prev.filter(mem => mem.firstname !== state.currentUser.firstname)
        return goose
      })
      setButtonText({join:"Join Group", member: "Not a Member"})
    }
  }

  return (
    <Card sx={{ maxWidth: 1400, padding: '10px 30px' }}>
      <CardMedia
        component="img"
        height="440"
        src={image}
        alt="green iguana"
      />

          <CardContent>
            <Typography sx={{ marginBottom:'0px' }} gutterBottom variant="h3" component="div">
              {groupName}
            </Typography>
            {
              members.length ? 
                <>
                  <div style={{display:'flex', alignItems:'center', marginTop:'5px'}}>
                    <span><LockIcon/></span>
                    <span style={{marginRight:'10px', color:'#888', fontSize:'16px'}}>Private Group</span>
                    <span style={{color:'#444', fontSize:'16px'}}>{memberNumbers}</span>
                  </div>
                  <AvatarSnake numbers={memberNumbers} members={groupMembers}/>
                </>
              :
                <LoadingButton loading variant="outlined">
                  Loading
                </LoadingButton>
            }
          </CardContent>

      <CardActions>
        <Button variant="outlined">{buttonText.member}</Button>
        <Button onClick={toggleMembership} variant="contained">{buttonText.join}</Button>
        <NewGroupButton/>
      </CardActions>
    </Card>
  );
}