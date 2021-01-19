import React from 'react';
import {
    Box,
    Grid,
    Typography,
    createMuiTheme,
    ThemeProvider, Button
} from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
import HeaderIssueRootDashboard from "./HeaderIssueRootDashboard";
import IssueDashboard from "./IssueDashBoard";

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

function IssueRootDashboard() {
    return (
        <React.Fragment>
            <HeaderIssueRootDashboard />
            <IssueDashboard />
        </React.Fragment>
    )
}

export default withStyles(useStyles)(IssueRootDashboard)