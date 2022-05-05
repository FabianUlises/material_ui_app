import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";



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