import { createContext } from "react";
export default createContext();

import { actionTypes } from './actionTypes.js';


/*---------------------------
| State Updater (Reducer)
---------------------------*/
export const reducer = (state, action) => {

    switch(action.type) {
        case actionTypes.UF_UPDATE_CONTROL: {
            return {
                ...state,
                ...action.newState
            
            };
        }

        default:{
            return {...state}
        }
    }
}