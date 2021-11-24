
import { saveSearchResults, isLoading, clearResults, setNext, updateResults } from './types'

const INITIAL_STATE = {
    results:[],
    isLoading: false,
    next: '',
}
const HomeReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case saveSearchResults:

           return {

             ...state, results: action.payload,

           };
        case updateResults:

            return {
 
              ...state, results: [...state.results, ...action.payload],
 
            };

        case isLoading:
            return {
                ...state,
                isLoading: !state.isLoading
            }

        case clearResults:

        return {
            ...state,
            results: []
        }

        case setNext:

        return {
            ...state,
            next: action.payload
        }

         default: return state;

    }

};

export default HomeReducer;