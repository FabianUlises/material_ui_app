import React from 'react';
import { Grid } from '@material-ui/core';

import MainGridItem from './MainGridItem'
import ProductInfo from './ProductInfo'

export default function GridLayout() {
    return (
        <Grid container>
            <Grid item>
                <MainGridItem />
            </Grid>

            <Grid item>
                <ProductInfo />
            </Grid>
            
        </Grid>
    )
} 