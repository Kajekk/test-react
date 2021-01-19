import React from 'react';
import {
    Box,
    Grid,
    Typography,
    createMuiTheme,
    ThemeProvider, Button
} from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
import {green} from "@material-ui/core/colors";
import IssueRootDashboard from "./IssueRootDashboard";

const useStyles = theme => ({
    containerSection: {
        padding: 16,
        backgroundImage: "linear-gradient(180deg,transparent 60%, #FFF),linear-gradient(70deg, #F1F8FF 32%, #DCFFE4);"
    },
    sectionContain: {
        textAlign: "center",
    },
    margin: {
        margin: theme.spacing(1),
    },
    normalBtn: {
        textTransform: "none",
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green["600"],
        },
    },
});

function BodyApp() {
    return (
        <React.Fragment>
            <IntroSectionWithStyle />
            <IssueRootDashboard />
        </React.Fragment>
    )
}


function IntroSection({classes}) {
    return (
        <React.Fragment>
            <Grid container justify="center" alignItems="center" className={classes.containerSection}>
                <Grid item xs={12}>
                    <Box my={6} className={classes.sectionContain}>
                        <Typography variant="h4" gutterBottom noWrap>
                            Learn Git and GitHub without any code!
                        </Typography>
                        <Typography variant="h6" gutterBottom noWrap>
                            Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.
                        </Typography>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary" size="large" className={`${classes.margin} ${classes.normalBtn}`}>
                                Read the guide
                            </Button>
                        </ThemeProvider>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const IntroSectionWithStyle = withStyles(useStyles)(IntroSection)

export default withStyles(useStyles)(BodyApp)