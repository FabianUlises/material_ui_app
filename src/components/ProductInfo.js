import { Container, Grid, Typography } from "@material-ui/core";

import GridItem from './GridItem';

export default function ProductInfo() {
    return (
        <Container>
            <Typography variant="h2">
                What you'll get
            </Typography>
            <Grid Container>
                <Grid item>
                    <GridItem
                        title='courses'
                    />
                </Grid>
            </Grid>
        </Container>
    )
}