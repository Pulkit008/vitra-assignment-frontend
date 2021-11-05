import * as React from 'react';
import {Box, Grid} from '@mui/material';
import FriendCard from './FriendCard';

const friendList = props => {
    return (
        <Box sx={{ flexGrow: 1, marginX: '12px', marginY: '50px' }}>
        <Grid container spacing={3} justifyContent="center">
            { props.peopleData.filter(data => parseFloat(data.balance.replace(',','').replace('$','')) < 2000 && !data.isActive )
            .map(data => <Grid key={data._id} item xs={11} sm={10} md={4} lg={3}>
                <FriendCard data={data}/>
            </Grid>)}
        </Grid>
      </Box>
    );
  }
  
  export default friendList;