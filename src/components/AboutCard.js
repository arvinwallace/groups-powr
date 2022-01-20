import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function AboutCard({about}) {
  return (
    <Card sx={{ width: '100%', maxWidth: 400, marginTop: 2 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          About
        </Typography> */}
        <Typography variant="h5" component="div">
          About
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Cattle Ranchers
        </Typography>
        <Typography variant="body2">
          {about}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}