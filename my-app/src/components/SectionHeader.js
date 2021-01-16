import React from 'react';
import clsx from 'clsx';
import {Container, Typography, Box, Grid, Avatar, makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';
import {blue, deepOrange, green, pink, purple, yellow} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    section: {
        backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    iconWrapper: {
        backgroundColor: theme.palette.primary.light,
    },
    icon1: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    icon2: {
        backgroundColor: yellow[100],
        color: yellow[800],
    },
    icon3: {
        backgroundColor: green[100],
        color: green[600],
    },
    icon4: {
        backgroundColor: purple[100],
        color: purple[600],
    },
    icon5: {
        backgroundColor: pink[100],
        color: pink[600],
    },
    icon6: {
        backgroundColor: deepOrange[100],
        color: deepOrange[600],
    },
}))

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
            light: "#a6d4fa",
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

function SectionHeader() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <section className={classes.section}>
                <Container maxWidth="lg">
                    <Box py={6}>
                        <Box textAlign="center" mb={9}>
                            <Container maxWidth="sm">
                                <Typography variant="overline" color="textSecondary">LOREM IPSUM</Typography>
                                <Typography variant="h3" component="h2" gutterBottom={true}>
                                    <Typography variant="h3" component="span" color="primary">Donec lacinia </Typography>
                                    <Typography variant="h3" component="span">turpis non sapien lobortis pretium</Typography>
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" paragraph={true}>Integer feugiat massa sapien, vitae tristique metus suscipit nec.</Typography>
                            </Container>
                        </Box>
                        <Grid container spacing={6}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box display="flex">
                                    <Box pr={5}>
                                        <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon1) }>
                                            <ApartmentIcon />
                                        </Avatar>
                                    </Box>
                                    <div>
                                        <Typography variant="h6" component="h3" gutterBottom={true}>Lorem ipsum dolor sit amet</Typography>
                                        <Typography variant="body2" component="p" color="textSecondary">In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.</Typography>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box display="flex">
                                    <Box pr={5}>
                                        <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon2) }>
                                            <ApartmentIcon />
                                        </Avatar>
                                    </Box>
                                    <div>
                                        <Typography variant="h6" component="h3" gutterBottom={true}>Lorem ipsum dolor sit amet</Typography>
                                        <Typography variant="body2" component="p" color="textSecondary">In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.</Typography>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box display="flex">
                                    <Box pr={5}>
                                        <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon3) }>
                                            <ApartmentIcon />
                                        </Avatar>
                                    </Box>
                                    <div>
                                        <Typography variant="h6" component="h3" gutterBottom={true}>Lorem ipsum dolor sit amet</Typography>
                                        <Typography variant="body2" component="p" color="textSecondary">In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.</Typography>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box display="flex">
                                    <Box pr={5}>
                                        <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon4) }>
                                            <ApartmentIcon />
                                        </Avatar>
                                    </Box>
                                    <div>
                                        <Typography variant="h6" component="h3" gutterBottom={true}>Lorem ipsum dolor sit amet</Typography>
                                        <Typography variant="body2" component="p" color="textSecondary">In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.</Typography>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box display="flex">
                                    <Box pr={5}>
                                        <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon5) }>
                                            <ApartmentIcon />
                                        </Avatar>
                                    </Box>
                                    <div>
                                        <Typography variant="h6" component="h3" gutterBottom={true}>Lorem ipsum dolor sit amet</Typography>
                                        <Typography variant="body2" component="p" color="textSecondary">In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.</Typography>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box display="flex">
                                    <Box pr={5}>
                                        <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon6) }>
                                            <ApartmentIcon />
                                        </Avatar>
                                    </Box>
                                    <div>
                                        <Typography variant="h6" component="h3" gutterBottom={true}>Lorem ipsum dolor sit amet</Typography>
                                        <Typography variant="body2" component="p" color="textSecondary">In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.</Typography>
                                    </div>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>
        </React.Fragment>
    )
}

// class SectionHeader extends Component {
//     render() {
//         const classes = styles(theme)
//         return (
//             <React.Fragment>
//                 <section className={classes.section}>
//                     <Container maxWidth="lg">
//                         <Box py={6}>
//                             <Box textAlign="center" mb={9}>
//                                 <Container maxWidth="sm">
//                                     <Typography variant="overline" color="textSecondary">LOREM IPSUM</Typography>
//                                     <Typography variant="h3" component="h2" gutterBottom={true}>
//                                         <Typography variant="h3" component="span" color="primary">Donec lacinia </Typography>
//                                         <Typography variant="h3" component="span">turpis non sapien lobortis pretium</Typography>
//                                     </Typography>
//                                     <Typography variant="subtitle1" color="textSecondary" paragraph={true}>Integer feugiat massa sapien, vitae tristique metus suscipit nec.</Typography>
//                                 </Container>
//                             </Box>
//                             <Grid container spacing={6}>
//                                 <Grid item xs={12} sm={6} md={4}>
//                                     <Box display="flex">
//                                         <Box pr={5}>
//                                             <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon1) }>
//                                                 <ApartmentIcon />
//                                             </Avatar>
//                                         </Box>
//                                         <div>
//                                             <Typography variant="h6" component="h3" gutterBottom={true}>Lorem ipsum dolor sit amet</Typography>
//                                             <Typography variant="body2" component="p" color="textSecondary">In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.</Typography>
//                                         </div>
//                                     </Box>
//                                 </Grid>
//                                 <Grid item xs={12} sm={6} md={4}>
//                                     <Box display="flex">
//                                         <Box pr={5}>
//                                             <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon2) }>
//                                                 <ApartmentIcon />
//                                             </Avatar>
//                                         </Box>
//                                         <div>
//                                             <Typography variant="h6" component="h3" gutterBottom={true}>Lorem ipsum dolor sit amet</Typography>
//                                             <Typography variant="body2" component="p" color="textSecondary">In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.</Typography>
//                                         </div>
//                                     </Box>
//                                 </Grid>
//                                 <Grid item xs={12} sm={6} md={4}>
//                                     <Box display="flex">
//                                         <Box pr={5}>
//                                             <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon3) }>
//                                                 <ApartmentIcon />
//                                             </Avatar>
//                                         </Box>
//                                         <div>
//                                             <Typography variant="h6" component="h3" gutterBottom={true}>Lorem ipsum dolor sit amet</Typography>
//                                             <Typography variant="body2" component="p" color="textSecondary">In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.</Typography>
//                                         </div>
//                                     </Box>
//                                 </Grid>
//                                 <Grid item xs={12} sm={6} md={4}>
//                                     <Box display="flex">
//                                         <Box pr={5}>
//                                             <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon4) }>
//                                                 <ApartmentIcon />
//                                             </Avatar>
//                                         </Box>
//                                         <div>
//                                             <Typography variant="h6" component="h3" gutterBottom={true}>Lorem ipsum dolor sit amet</Typography>
//                                             <Typography variant="body2" component="p" color="textSecondary">In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.</Typography>
//                                         </div>
//                                     </Box>
//                                 </Grid>
//                                 <Grid item xs={12} sm={6} md={4}>
//                                     <Box display="flex">
//                                         <Box pr={5}>
//                                             <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon5) }>
//                                                 <ApartmentIcon />
//                                             </Avatar>
//                                         </Box>
//                                         <div>
//                                             <Typography variant="h6" component="h3" gutterBottom={true}>Lorem ipsum dolor sit amet</Typography>
//                                             <Typography variant="body2" component="p" color="textSecondary">In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.</Typography>
//                                         </div>
//                                     </Box>
//                                 </Grid>
//                                 <Grid item xs={12} sm={6} md={4}>
//                                     <Box display="flex">
//                                         <Box pr={5}>
//                                             <Avatar variant="rounded" className={ clsx(classes.iconWrapper, classes.icon6) }>
//                                                 <ApartmentIcon />
//                                             </Avatar>
//                                         </Box>
//                                         <div>
//                                             <Typography variant="h6" component="h3" gutterBottom={true}>Lorem ipsum dolor sit amet</Typography>
//                                             <Typography variant="body2" component="p" color="textSecondary">In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.</Typography>
//                                         </div>
//                                     </Box>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     </Container>
//                 </section>
//             </React.Fragment>
//         )
//     }
// }

// export default withStyles(useStyles)(SectionHeader);

export default function CustomStyles() {
    return (
        <ThemeProvider theme={theme}>
            <SectionHeader />
        </ThemeProvider>
    );
}