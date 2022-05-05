import { Container, Card, Typography, Button, CardMedia, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    
    cardMedia: {
        height: 200,
        width: 300
    },
    mainItem: {
        color: 'orange',
        textAlign: 'left'
    },
    mainContainer: {
        paddingTop: 120,
        paddingBottom: 120
    },
    imageCard: {
        margin: 40
    }
}))
 
export default function MainGridItem() {
    const { cardMedia, mainItem, mainContainer, imageCard } = useStyles();
    return (
        <Container>
            <Card>
                <Grid container className={mainContainer}>

                    <Grid item classNam={mainItem} md={6} >
                        <Typography variant='h2'>
                            Card Title
                        </Typography>

                        <Typography>
                            Learn more
                        </Typography>
                        <Button color='primary' variant='container'>
                            Sign Up
                        </Button>
                    </Grid>
                    <Grid item md={6}>
                        <Card className={imageCard}>
                            <CardMedia className={cardMedia} image="https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_1280.jpg"
                            />
                        </Card>
                    </Grid>
                    
                </Grid>
            </Card>
        </Container>
    )
}