//bring action with type
import { StaticStations } from '../../utiles/constants';
import { Action, ActionType } from './stationActions';

//define state variable with their type
export interface stationState {
    allStation: Array<Object>;
    singleStation: Array<Object>;
    loading: String;
    error: String;
}

//our initial state define here
//this the initial value of our state
const initialState: stationState = {
    allStation: [],
    singleStation: [],
    loading: '',
    error: '',
};

const stationReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_ALL_STATION:
            return {
                ...state,
                allStation: action.payload ?? StaticStations,
            };
        //   case ActionType.AUTH_ERROR_MESSAGE:
        //     return {
        //       ...state,
        //       authError: action.payload,
        //     };
        //   case ActionType.AUTH_TOKEN:
        //     return {
        //       ...state,
        //       token: action.payload,
        //     };
        default:
            return state;
    }
};

export default stationReducer;