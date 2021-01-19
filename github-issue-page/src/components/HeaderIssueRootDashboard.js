import React from 'react';
import {Box, Button, Container, Grid, Typography, Tabs, Tab} from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";

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
        marginBottom: theme.spacing(4),
        borderBottom: "1px solid #eaecef"
    }
})

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function HeaderIssueRootDashboard({classes}) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Container className={classes.headerContainer}>
                <Grid container>
                    <Grid item xs={3} container alignContent="center">
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
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Active"  />
                    <Tab label="Active"  />
                    <Tab label="Active"  />
                    <Tab label="Active"  />
                    <Tab label="Active"  />
                    <Tab label="Active"  />
                </Tabs>
            </Container>
        </React.Fragment>
    )
}

export default withStyles(useStyles)(HeaderIssueRootDashboard)