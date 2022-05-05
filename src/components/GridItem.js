import { Container, Icon, Typography } from '@material-ui/core';


export default function GridItem(props) {

    return(
        <Container>
            <Icon>
                {props.icon}
            </Icon>
            <Typography>
                {props.title}
            </Typography>
            <Typography>
                {props.desc}
            </Typography>
        </Container>
    )
}