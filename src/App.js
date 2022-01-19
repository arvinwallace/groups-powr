import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from './layout/AppBar'
import SideBar from './layout/SideBar'
import GroupRoutes from './layout/GroupRoutes'
import { GroupProvider } from './components/ContextComponent'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ContainerPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  minHeight: '100vh'
}));

export default function App() {

  return (
    <GroupProvider>  
    <ContainerPaper>
      <Grid container direction="column" spacing={1}>
      {/* header */}
        <Grid item xs={12}>
          <AppBar>Header</AppBar>
        </Grid>
        {/* body */}
        <Grid item xs={12}>
            <Grid container>
              {/* left side */}
              <Grid item xs={12} sm={4} md={3}>
                <SideBar/>
              </Grid>
              {/* right side */}
              <GroupRoutes/>
            </Grid>
        </Grid>
      </Grid>
      </ContainerPaper>
      </GroupProvider>
  );
}