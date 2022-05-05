import { Container, Grid, Typography } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";







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
                        desc='read more about the courses available'
                        icon={<ThumbUp />}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}