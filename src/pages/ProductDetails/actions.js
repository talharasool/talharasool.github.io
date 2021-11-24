import { BASE_URL } from '../../config';
import axios from 'axios';
import { setVendor, setSuggestions, setSelectedSuggestion, clearSuggestions, isLoading, clearVendors } from './type';

const setVendorsAction = (payload) => {
    return {
        type: setVendor,
        payload
    }
}

export const clearVendorsAction = () => {
    return {
        type: clearVendors
    }
}

const setSuggestionsAction = (payload) => {
    return {
        type: setSuggestions,
        payload
    }
}

export const setSelectedSuggestionsAction = (payload) => {
    return {
        type: setSelectedSuggestion,
        payload
    }
}

export const clearSuggestionsActions = () => {
    return {
        type: clearSuggestions
    }
}

export const setIsLoadingAction = () => {
    return {
        type: isLoading
    }
}

export const fetchVendorsAction = (sku) => (dispatch) => {
    if(sku){
        dispatch(clearVendorsAction())
        axios.get(`${BASE_URL}product_vendor/${sku}`).then((resp) => {
            dispatch(setVendorsAction(resp.data[sku]))
        })
    }   
}

export const fetchSuggesionsAction = (keyword) => (dispatch, getState) => {
    
    if(keyword.length > 3){
        dispatch(setIsLoadingAction());
        dispatch(clearSuggestionsActions());
       return axios.get(`${BASE_URL}sneaker/?page=1&search=${keyword}&size=10`).then((resp) => {
            dispatch(setSuggestionsAction(resp.data.results))
            dispatch(setIsLoadingAction());
        }).catch(() => {
            dispatch(setIsLoadingAction()); 
        })
    }
  };