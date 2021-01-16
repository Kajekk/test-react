import React from 'react';
import {Box, Grid, makeStyles, Paper, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    deleteIcon: {
        float: "right",
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
}))

export default function Event(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography variant="subtitle1">{props.time}</Typography>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                </Typography>
                            </Grid>
                        </Grid>
                        {/*<Box mr={6}>*/}
                        {/*    <Delete className={classes.deleteIcon} />*/}
                        {/*    <Typography variant="h6" component="h6">{props.title}</Typography>*/}
                        {/*</Box>*/}
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}