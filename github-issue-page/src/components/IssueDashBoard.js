import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Container, Grid, Typography} from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
import data from "./data"
import Issue from "./Issue";
import {getIssues} from "../redux/actions";

const useStyles = theme => ({
    rootContainer: {
        border: "1px solid #eaecef",
        borderRadius: "5px"
    },
    headerIssueBoard: {
        borderBottom: "1px solid #eaecef"
    }
})

function IssueDashboard({classes, getIssues}) {
    const [issues, setIssues] = useState(data)

    useEffect(() => {
        const org = "facebook"
        const repo = "create-react-app"
        // API.getIssues(org, repo).then(res => console.log(res))
        // console.log(rs)
        getIssues(org, repo)
    })

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

const mapStateToProps = ({issues}, ownProps) => ({
    issuesError: issues.error,
    isLoading: issues.loading,
    pageCount: issues.pageCount,
})

// const mapDispatchToProps = dispatch => ({
//     getIssues: (org, repo, page) => {
//         dispatch(getIssues(org, repo, page, dispatch))
//         // dispatch(getIssuesSuccess())
//     }
// })

export default connect(mapStateToProps, {getIssues})(withStyles(useStyles)(IssueDashboard))