import React from 'react';
import {Box, Grid, makeStyles, Paper, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

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
                <Box mb={2}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Typography variant="subtitle1">{props.time}</Typography>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {props.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {props.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <DeleteIcon onClick={() => {
                                    props.onDelete(props.id);
                                }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Grid>
                    <Typography gutterBottom variant="subtitle1">
                        {props.description}
                    </Typography>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}