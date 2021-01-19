import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

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
    headerContainer: {
        borderBottom: "1px solid #eaecef"
    }
})

function Issue({classes, issue}) {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item>
                    <ErrorOutlineIcon/>
                </Grid>
                <Grid item xs={12} sm container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography variant="subtitle1">
                            {issue.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {issue.user.login}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default withStyles(useStyles)(Issue)