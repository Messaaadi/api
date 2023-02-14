import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const ListOfUsers = ({user}) => {
    return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {user.name}
      </Typography>
      <Typography variant="h5" component="div">
      {user.username}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {user.email}
      </Typography>
      <Typography variant="body2">
      {user.phone}
        
      </Typography>
    </CardContent>
    
  </Card>
  )}
