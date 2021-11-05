import * as React from 'react';
import { Box, Slider, Grid } from '@mui/material';

const marks = [
    {
        value: 0,
        label: '$0',
    },
    {
        value: 25,
        label: '$1000',
    },
    {
        value: 50,
        label: '$2000',
    },
    {
        value: 75,
        label: '$3000',
    },
    {
        value: 100,
        label: '$4000',
    },
];

function valuetext(value) {
    return `$${value}`;
}

function valueLabelFormat(value) {
    return `< ${value * 40}$`;
}

const valueSlider = props => {
    return (
        <Box sx={{ marginY: '20px'}}>
            <Grid container justifyContent="center">
                <Grid item xs={10} sm={8} md={6} lg={4}>
                    <Slider
                        aria-label="Restricted values"
                        defaultValue={4000}
                        valueLabelFormat={valueLabelFormat}
                        getAriaValueText={valuetext}
                        step={null}
                        valueLabelDisplay="auto"
                        marks={marks}
                        onChange={props.changed}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default valueSlider;