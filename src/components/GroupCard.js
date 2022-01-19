import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function GroupCard({source,name,last,destination}) {
  
  return (
      <Link href={`/${destination}`} underline="none" component={CardActionArea}>   
        <Card sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                {name}
              </Typography>
              <Typography variant="subtitle3" color="text.secondary" component="div">
                {last}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ height: 100, width: 120 }}
            src={source}
            alt="group pic"
          />
        </Card>
      </Link>
  );
}

export default React.memo(GroupCard)