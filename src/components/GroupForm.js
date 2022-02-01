import * as React from 'react';
import { useGroupContext } from '../components/ContextComponent'
import { useGroupPic } from '../hooks/useGroupPic'
import { useGetUsers } from '../hooks/useGetUsers';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function GroupForm({handleClose}) {
  const [form, setForm] = React.useState({name:'', about:'', query:''});
  const {state, dispatch} = useGroupContext();
  const handleChange = (event, key) => {
    setForm(form => ({...form, [key]:event.target.value}));
  };

  const getTheThings = () => {
    useGroupPic(state,dispatch)
    useGetUsers(dispatch)
  }
  const createGroup = () => {
    console.log("dispatching new group")
    const newGroup = {
      collection:[],
      name: form.name,
      about: form.about,
      members:[],
      query: form.query,
      bla: "2 days ago",
      pic: ""
    }
    dispatch({
      type: "NEW_GROUP",
      payload: newGroup,
      callback: getTheThings
    })
    handleClose()
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
        textAlign: 'center'
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-name"
          label="name"
          value={form.name}
          onChange={(e) => handleChange(e,'name')}
        />
        <TextField
          id="outlined-name"
          label="about"
          multiline
          rows={4}
          value={form.about}
          onChange={(e) => handleChange(e,'about')}
          variant="filled"
        />
        <TextField
          id="outlined-name"
          label="query"
          value={form.query}
          onChange={(e) => handleChange(e,'query')}
        />
        <Button onClick={createGroup} variant="contained">Create Group</Button>
        <Button onClick={handleClose} variant="outlined">Close</Button>
    </Box>
  );
}