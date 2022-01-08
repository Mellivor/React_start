import { logined } from "./athor_reducer";


const IS_LOADED = 'mellivor-network/app/stateIsLoaded';


let initialState = {
    authorized: false
};

const app_reducer = (state = initialState, action) => {
    switch (action.type) {

        case IS_LOADED:
            return { ...state, authorized: true }

        default:
            return state;
    }

};
export const setloaded = () => ({ type: IS_LOADED });


export const initializeApp = () => async (dispatch)=>{

        let response = await dispatch(logined())
        if (!response) {
                dispatch(setloaded())
        }


}

export default app_reducer;
