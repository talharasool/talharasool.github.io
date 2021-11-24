import { saveSearchResults, isLoading, clearResults, setNext, updateResults } from './types';
import { BASE_URL } from '../../config';
import axios from 'axios';

const saveSearchResultsAction = (payload) => {
    return {
        type: saveSearchResults,
        payload
    }
}

const updateResultsAction = (payload) => {
    return {
        type: updateResults,
        payload
    }
}

export const setIsLoading = () => {
    return {
        type: isLoading
    }
}

export const clearResultsActions = () => {
    return {
        type: clearResults
    }
}

export const setNextAction = (payload) => {
    return {
        type: setNext,
        payload
    }
}

export const fetchSearchResultsAction = (keyword) => (dispatch, getState) => {
    
    if(keyword.length > 3){
        dispatch(setIsLoading());
        dispatch(clearResultsActions());
       return axios.get(`${BASE_URL}sneaker/?page=1&search=${keyword}&size=10`).then((resp) => {
            dispatch(saveSearchResultsAction(resp.data.results))
            dispatch(setNextAction(resp.data.next));
            dispatch(setIsLoading());
        }).catch(() => {
            dispatch(setIsLoading()); 
        })
    }
  };

export const fetchNextPageAction = () => (dispatch, getState) => {
    const { home : {next }} = getState();
    if(next){
        dispatch(setIsLoading());
        return axios.get(next).then((resp) => {
            dispatch(updateResultsAction(resp.data.results))
            dispatch(setNextAction(resp.data.next));
            dispatch(setIsLoading());
        })
    }
    
}