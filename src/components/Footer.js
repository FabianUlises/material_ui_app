import { Grid, Card, TextField, Typography, makeStyles, Button, Icon } from "@material-ui/core";

import { YouTube, Twitter } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    messageForm: {
        margin: 10,
        width: '80%'
    },
    messageBtn: {
         width: '100%'
    },
    companyInformation: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    footer: {
        padding: theme.spacing(6),
        backgroundColor: '#282828',
        color: 'white'
    }
}));

export default function Footer() {

    const { messageForm, footer, messageBtn, companyInformation } = useStyles();

    return (
        <footer className={footer}>
            <Grid container>
                <Grid item lg={6} md={12}>
                    <Card>
                        <form>
                            <TextField label='Get in touch' className={messageForm}/>
                        </form>
                    </Card>
                    <Button variant='contained' color='primary' className={messageBtn}>
                        Send Message
                    </Button>
                </Grid>
                <Grid item lg={6} md={12} className={companyInformation}>
                    <Typography variant="h5">
                        Mammoth Interactive
                    </Typography>
                    <Typography>
                        Building award-winning, afforable online courses
                    </Typography>
                    <Typography>
                        Mammoth Interactive
                    </Typography>
                    <Grid item>
                        <Icon>
                            <YouTube />
                        </Icon>
                        <Icon>
                            <Twitter />
                        </Icon>
                    </Grid>

                </Grid>
            </Grid>
        </footer>
    )
}