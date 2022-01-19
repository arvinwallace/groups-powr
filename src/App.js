import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from './layout/AppBar'
import SideBar from './layout/SideBar'
import { GroupProvider } from './components/ContextComponent'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SidePiece = styled(Paper)(({ theme }) => ({
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
              <Grid item xs={12} sm={8} md={9}>
                <Grid container direction="column">
                  {/* HERO */}
                  <Grid item xs={12}>
                    <SidePiece>Hero</SidePiece>
                  </Grid>
                  {/* MAIN CONTENT */}
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={12} md={7}>
                        <SidePiece>Feed</SidePiece>
                      </Grid>
                      <Grid item xs={12} md={5}>
                        <SidePiece>About</SidePiece>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
      </ContainerPaper>
      </GroupProvider>
  );
}