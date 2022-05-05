import { Container, Card, Typography, Button, CardMedia, makeStyles, withWidth } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    
    cardMedia: {
        height: 300,
        width: 150
    }
}))

export default function MainGridItem() {
    const { cardMedia } = useStyles();
    return (
        <Container>
            <Card>
                <Typography>
                    Card Title
                </Typography>

                <Typography>
                    Learn more
                </Typography>
                <Button color='primary' variant='container'>
                    Sign Up
                </Button>
                <Card>
                    <CardMedia className={cardMedia} image="https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_1280.jpg"
                     />
                </Card>
            </Card>
        </Container>
    )
}