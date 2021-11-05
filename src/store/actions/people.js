import * as actionTypes from './actionTypes';
import axios from 'axios';

export const peopleStart = () => {
    return {
        type: actionTypes.PEOPLE_START
    };
};

export const peopleSuccess = (peopleData) => {
    return {
        type: actionTypes.PEOPLE_SUCCESS,
        peopleData: peopleData
    };
};

export const peopleFail = (error) => {
    return {
        type: actionTypes.PEOPLE_FAIL,
        error: error
    };
};

export const getPeopleData = () => {
    return dispatch => {
        dispatch(peopleStart())
        let url = "https://vitra-assignment-pulkit.herokuapp.com/peopleData";
        axios.get(url)
            .then(res => {
                dispatch(peopleSuccess(res.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(peopleFail('Some Error Occured!'));
            })
    }
}