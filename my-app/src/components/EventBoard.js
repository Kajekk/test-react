import React, {useState} from 'react';
import {Box, Button, Container, Grid, makeStyles, Typography} from '@material-ui/core';
import Event from "./Event";

const useStyles = makeStyles((theme) => ({}))

export default function EventBoard() {
    const [events, setEvents] = useState([
        {
            id: 1,
            time: "10:00",
            title: "123123"
        },
        {
            id: 2,
            time: "11:00",
            title: "321321",
        }
    ])
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Box py={6}>
                    <Grid container>
                        <Grid item xs={9}>
                            <Typography variant="h3" component="h3">TODAY</Typography>
                            <Box m={2} p={2} id="schedule-items">
                                {events.map(event => (
                                    <Event
                                        key={event.id}
                                        id={event.id}
                                        time={event.time}
                                        title={event.title}
                                        location={event.location}
                                        description={event.description}
                                    />
                                ))}
                            </Box>
                            <Box textAlign="center">
                                <Button>
                                    Add Event
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={3} container>
                            <Grid item xs={12}>
                                <Typography variant="h3" component="h3">Schedule</Typography>
                                <Typography variant="h6" component="h6" color="textSecondary">
                                    It's going to be busy that today. You have
                                    <b> events </b> today.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h3" component="span">Sunny</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h3" component="span">23°C</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" component="p">
                                    Don't forget your sunglasses. Today will dry and sunny, becoming
                                    warm in the afternoon with temperatures of between 20 and 25
                                    degrees.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}
