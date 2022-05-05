import { Grid, Card, TextField, Typography } from "@material-ui/core";
import { YouTube } from "@material-ui/icons";

import { YouTube, FaceBook, Twitter } from "@material-ui/icons";

export default function Footer() {
    return (
        <footer>
            <Grid container>
                <Grid item>
                    <Card>
                        <form>
                            <TextField label='Get in touch' />
                        </form>
                    </Card>
                    <Button>
                        Send Message
                    </Button>
                </Grid>
                <Grid item>
                    <Typography>
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
                            <Facebook />
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