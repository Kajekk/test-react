import React, {useState} from 'react';
import {Box, Button, Container, Grid, Typography, Tabs, Tab} from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
import data from "./data"
import Issue from "./Issue";

const useStyles = theme => ({
    rootContainer: {
        border: "1px solid #eaecef",
        borderRadius: "5px"
    },
    headerIssueBoard: {
        borderBottom: "1px solid #eaecef"
    }
})

function IssueDashboard({classes}) {
    const [issues, setIssues] = useState(data)
    return (
        <React.Fragment>
            <Container className={classes.rootContainer}>
                <Grid container>
                    <Typography variant="h6" noWrap>
                        Header
                    </Typography>

                </Grid>
                <hr/>
                {issues.map(issue => (
                    <Issue issue={issue}>

                    </Issue>
                ))}
            </Container>
        </React.Fragment>
    )
}

export default withStyles(useStyles)(IssueDashboard)