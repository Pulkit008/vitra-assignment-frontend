import * as React from 'react';
import { Box } from '@mui/system';
import { Card, CardContent, Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';

const friendCard = props => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 4
                }}>
                    <Avatar>{props.data.name[0]}</Avatar>
                    <Box sx={{ marginX: 2, fontSize: 18, fontWeight: 600 }}>{props.data.name}<br /><span style={{ fontSize: 15, fontWeight: 400 }}>{props.data.email}</span></Box>
                </Box>
                <h3 align="center" style={{marginBottom: 0}}>Friends</h3>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {props.data.friends.map(friend => <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={friend.name}
                            sx={{paddingTop: '11px'}}
                        />
                    </ListItem>)}
                </List>
            </CardContent>
        </Card>
    );
}

export default friendCard;