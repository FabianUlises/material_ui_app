import React from 'react';
import { Grid } from '@material-ui/core';

import MainGridItem from './MainGridItem';
import ProductInfo from './ProductInfo';
import Pricing from './Pricing';

export default function GridLayout() {
    return (
        <Grid container>
            <Grid item>
                <MainGridItem />
            </Grid>

            <Grid item>
                <ProductInfo />
            </Grid>
            <Grid item>
                <Pricing />
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    )
} 