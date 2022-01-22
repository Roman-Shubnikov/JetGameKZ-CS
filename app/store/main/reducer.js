
import {
    accountActionTypes, 
} from "./ActionTypes";

const initalStateAccount = {
    scheme: "light",
}

export const accountReducer = (state = initalStateAccount, action) => {
    switch(action.type) {
        case accountActionTypes.SET_SCHEME:
            return {...state, scheme: action.payload}
        default: 
            return state

    }
}
