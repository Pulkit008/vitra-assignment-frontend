import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

const peopleCard = props => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 1
                }}>
                    <Avatar>{props.data.name[0]}</Avatar>
                    <Box sx={{  marginX: 2, fontSize: 18, fontWeight: 600 }}>{props.data.name}<br/><span style={{fontSize: 15, fontWeight: 400}}>{props.data.email}</span></Box>
                </Box>
                <Box sx={{ marginX: 2 }}><span style={{fontWeight: 500}}>Balance: </span>{props.data.balance}</Box>
                <Box sx={{ marginX: 2 }}><span style={{fontWeight: 500}}>Phone: </span>{props.data.phone}</Box>

            </CardContent>
        </Card>
    );
}

export default peopleCard;