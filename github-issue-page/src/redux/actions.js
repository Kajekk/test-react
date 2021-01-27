import * as API from '../api'
import {GET_ISSUES, GET_ISSUES_FAILURE, GET_ISSUES_SUCCESS} from "./actionTypes";

export function getIssuesSuccess(issueResponse) {
    return {
        type: GET_ISSUES_SUCCESS,
        payload: {
            pageCount: issueResponse.pageCount,
            pageLinks: issueResponse.pageLinks,
            issues: issueResponse.data,
        }
    }
}

export function getIssueFailure(error) {
    return {
        type: GET_ISSUES_FAILURE,
        error
    }
}

export function getIssues(org, repo, page) {
    // dispatch(getIssuesSuccess())
    // API.getIssues(org, repo, page)
    //     .then(res => getIssuesSuccess(res))
    //     .catch(error => getIssueFailure(error))
    // return {
    //     type: GET_ISSUES,
    // }

    return dispatch => {
        API.getIssues(org, repo, page)
            .then(res => dispatch(getIssuesSuccess(res)))
            .catch(error => dispatch(getIssueFailure(error)))
    }
}