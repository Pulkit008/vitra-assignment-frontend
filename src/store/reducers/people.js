import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    peopleData: null,
    error: null,
    loading: false
};

const peopleStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const peopleSuccess = (state, action) => {
    return updateObject( state, {
        peopleData: action.peopleData,
        error: null,
        loading: false
     });
};

const peopleFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.PEOPLE_START: return peopleStart(state, action);
        case actionTypes.PEOPLE_SUCCESS: return peopleSuccess(state, action);
        case actionTypes.PEOPLE_FAIL: return peopleFail(state, action);
        default:
            return state;
    }
};

export default reducer;