
import {
    accountActionTypes, 
} from "./ActionTypes";

const initalStateAccount = {
    user: null,
    scheme: "light",
    language: 'ru',
}

export const accountReducer = (state = initalStateAccount, action) => {
    switch(action.type) {
        case accountActionTypes.SET_USER:
            return {...state, user: action.payload}
        case accountActionTypes.SET_SCHEME:
            return {...state, scheme: action.payload}
        case accountActionTypes.SET_LANGUAGE:
            return {...state, language: action.payload}
        default: 
            return state

    }
}
