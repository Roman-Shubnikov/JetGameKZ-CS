import {
    accountActionTypes,
    } from './ActionTypes';

export const accountActions = {
    setScheme: (payload) => ({type: accountActionTypes.SET_SCHEME, payload}),
    setLanguage: (payload) => ({type: accountActionTypes.SET_LANGUAGE, payload}),
    setUser: (payload) => ({type: accountActionTypes.SET_USER, payload}),
}