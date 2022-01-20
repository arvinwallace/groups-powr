import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const pic = "https://images.unsplash.com/photo-1642425149819-af1b803b2b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"

export default function RecentMedia({media}) {
  return (
    
    <Card sx={{ width:'100%', maxWidth: 400, alignSelf:'center', marginTop:'20px', padding: '20px' }}>
            <Typography sx={{ marginBottom:'0px' }} gutterBottom variant="h6" component="div">
          Recent Media
        </Typography>
    <Grid sx={{ maxWidth: 400 }} container direction="column">
      <Grid item>
        <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              src={media[0]}
              alt="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="140"
              src={media[1]}
              alt="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              src={media[2]}
              alt="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card >
            <CardMedia
              component="img"
              height="140"
              src={media[3]}
              alt="green iguana"
            />
          </Card>
        </Grid>
        </Grid>
      </Grid>
      <Grid container alignContent="space-between">
        <Grid item xs={3}>
        </Grid>
      </Grid>
    </Grid>
    </Card>
  );
}