import { Container, Card, Typography, Button } from '@material-ui/core';


export default function MainGridItem() {
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
            </Card>
        </Container>
    )
}