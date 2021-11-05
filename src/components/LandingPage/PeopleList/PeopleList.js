import * as React from 'react';
import {Box, Grid} from '@mui/material';
import PeopleCard from '../PeopleCard/PeopleCard';

const peopleList = props => {
    return (
        <Box sx={{ flexGrow: 1, marginX: '12px' }}>
        <Grid container spacing={3} justifyContent="center">
            { props.peopleData.filter(data => parseFloat(data.balance.replace(',','').replace('$','')) < props.filterValue )
            .map(data => <Grid key={data._id} item xs={11} sm={10} md={4} lg={3}>
                <PeopleCard data={data}/>
            </Grid>)}
        </Grid>
      </Box>
    );
  }
  
  export default peopleList;