import * as actionTypes from '../actions/actions'

const initialState = {
    currentUser: null,
    error: false,
    isLoggedIn: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                error: false
            }
        case actionTypes.AUTH_SIGNUP:
            return {
                ...state,
                isLoggedIn: true,
                error: false
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                currentUser: null,
                isLoggedIn: false,
                error: false
            }    
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                currentUser: action.user,
                isLoggedIn: true,
                error: false
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                error: true
            }    
        default:
            return state
    }
}

export default reducer