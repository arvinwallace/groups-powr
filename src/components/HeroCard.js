import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';

export default function HeroCard({image, groupName}) {
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
        <div style={{display:'flex', alignItems:'center', marginTop:'5px'}}>
          <span><LockIcon/></span>
          <span style={{marginRight:'10px', color:'#888', fontSize:'16px'}}>Private Group</span>
          <span style={{color:'#444', fontSize:'16px'}}> 23 Members</span>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}