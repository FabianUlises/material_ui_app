import { Container, Typography } from '@material-ui/core';

export default function GridItem(props) {

    return(
        <Container>
            <Typography>
                {props.title}
            </Typography>
        </Container>
    )
}