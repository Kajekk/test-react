import React from 'react';
import {Box, Button, Container, Grid, Typography, Tabs, Tab} from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";

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
})

function HeaderIssueRootDashboard() {
    return (
        <React.Fragment>
            <Container>
                <Grid container justify="center" alignContent="center">
                    <Grid item>
                        <Typography variant="subtitle1" noWrap>
                            facebook / create-react-app
                        </Typography>
                    </Grid>
                    <Grid item sm container direction="row" alignContent="center" justify="flex-end">
                        <Box m={2}>
                            <Button>
                                123
                            </Button>
                            <Button>
                                123
                            </Button>
                            <Button>
                                123
                            </Button>
                            <Button>
                                123
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Tabs
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Item One" icon={<PhoneIcon />} />
                    <Tab label="Item Two" icon={<FavoriteIcon />}  />
                    <Tab label="Item Three" icon={<PersonPinIcon />}  />
                    <Tab label="Item Four" icon={<HelpIcon />}  />
                    <Tab label="Item Five" icon={<ShoppingBasket />}  />
                    <Tab label="Item Six" icon={<ThumbDown />}  />
                    <Tab label="Item Seven" icon={<ThumbUp />}  />
                </Tabs>
            </Container>
        </React.Fragment>
    )
}

export default withStyles(useStyles)(HeaderIssueRootDashboard)