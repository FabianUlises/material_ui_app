import { Container, Typography } from "@material-ui/core";

import PricingOption from './PricingOption'

export default function Pricing() {
    return (
        <Container>
            <Typography variant="h2">
                Pricing
            </Typography>

            <Grid container>
                <Grid item lg={4} md={12} sm={12} >
                    <PricingOption 
                        title='Monthly'
                        price='19'
                        length='month'
                        desc='On sale now'
                    />
                </Grid>
                <Grid item  lg={4} md={12} sm={12} >
                <PricingOption 
                        title='Yearly'
                        price='199'
                        length='year'
                        desc='Save 80%'
                    />
                </Grid>
                <Grid item  lg={4} md={12} sm={12} >
                <PricingOption
                        title='Lifetime'
                        price='9,999'
                        length='life'
                        desc='Courses for life'
                    />
                </Grid>

            </Grid>
        </Container>
    )
}