import React, {useState} from 'react';
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid,
    makeStyles,
    TextField,
    Typography
} from '@material-ui/core';
import Event from "./Event";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

function AddDialog(props) {
    return (
        <React.Fragment>
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.toggleDialog} color="primary">
                    Cancel
                </Button>
                <Button onClick={props.toggleDialog} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </React.Fragment>
    )
}

export default function EventBoard() {
    const [modalStyle] = React.useState(getModalStyle);
    const [openDialog, setOpenDialog] = useState(false)
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
    const toggleDialog = () => {
        setOpenDialog(!openDialog)
    }

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
                                <Button onClick={toggleDialog}>
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

            <Dialog
                open={openDialog}
                onClose={toggleDialog}
                aria-labelledby="form-dialog-title"
            >
                <AddDialog toggleDialog={toggleDialog} />
            </Dialog>
        </React.Fragment>
    )
}
