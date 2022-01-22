import {
    accountActionTypes,
    } from './ActionTypes';

export const accountActions = {
    setScheme: (payload) => ({type: accountActionTypes.SET_SCHEME, payload}),
}