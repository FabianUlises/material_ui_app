import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Build, ThumbUp } from "@material-ui/icons";



import GridItem from './GridItem';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 120,
        paddingBottom: 120
    }
}));


export default function ProductInfo() {
    const { mainContainer } = useStyles();
    return (
        <Container className={mainContainer}>
            <Typography variant="h2">
                What you'll get
            </Typography>
            <Grid Container>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem
                        title='courses'
                        desc='read more about the courses available'
                        icon={<ThumbUp />}
                    />
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem
                        title='Build projects'
                        desc='Project-hased curriculum to build your portfolio'
                        icon={<Build />}
                    />
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem
                        title='courses'
                        desc='read more about the courses available'
                        icon={<ThumbUp />}
                    />
                </Grid>                
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem
                        title='Build projects'
                        desc='Project-hased curriculum to build your portfolio'
                        icon={<Build />}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}