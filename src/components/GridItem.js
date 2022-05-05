import { Container, Icon, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    gridItem: {
        padding: 20
    }
}))

export default function GridItem(props) {
    const { gridItem } = useStyles()

    return(
        <Container align='left' className={gridItem}>
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