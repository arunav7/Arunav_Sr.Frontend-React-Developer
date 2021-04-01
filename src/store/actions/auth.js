import * as actionTypes from './actions'
import { auth } from '../../firebase'

const authLogin = () => ({
    type: actionTypes.AUTH_LOGIN
})

const authSuccess = (user) => ({
    type: actionTypes.AUTH_SUCCESS,
    user
})

const authSignup = () => ({
    type: actionTypes.AUTH_SIGNUP
})

const authFail = () => ({
    type: actionTypes.AUTH_FAIL
})

const authLogout = () => ({
    type: actionTypes.AUTH_LOGOUT
})

export const signup = (email, password) => {
    return dispatch => {
        dispatch(authSignup())
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            dispatch(authSuccess(userCredentials.user))
        }).catch(err => {
            dispatch(authFail())
        })
    }
}

export const login = (email, password) => {
    return dispatch => {
        dispatch(authLogin())
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            dispatch(authSuccess(userCredentials.user))
        }).catch(err => {
            dispatch(authFail())
        })
    }
}

export const logout = () => {
    return dispatch => {
        auth.signOut()
        .then(() => {
            dispatch(authLogout())
        }).catch(err => {
            dispatch(authFail())
        })
    }
}