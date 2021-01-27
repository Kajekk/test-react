import {GET_ISSUES, GET_ISSUES_FAILURE, GET_ISSUES_SUCCESS} from "../actionTypes";

const initialState = {
    pageCount: 0,
    pageLinks: {},
    issues: [],
    isLoading: false,
    error: null
}

export default function IssuesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ISSUES_SUCCESS:
            return {
                ...state,
                pageCount: action.payload.pageCount,
                pageLinks: action.payload.pageLinks,
                issues: action.payload.issues,
                isLoading: false,
                error: null
            }
        case GET_ISSUES_FAILURE:
            return {
                ...state,
                error: action.error,
            }
        case GET_ISSUES:
        default:
            return state;
    }
}