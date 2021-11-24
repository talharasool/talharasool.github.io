
import { setVendor, setSuggestions, setSelectedSuggestion, clearSuggestions, isLoading, clearVendors } from './type'

const initialState = {
    vendor: [],
    isLoadingSugesstions: false,
    suggestionsList: [],
    selectedSuggestion: null
}

const productDetailsReducer = (state = initialState, action) => {
    switch(action.type){
        case setVendor:
            return {
                ...state,
                vendor: action.payload
            }
        case clearVendors:
                return {
                    ...state,
                    vendor: []
                }

        case setSuggestions:

        return {
            ...state,
            suggestionsList: action.payload
        }
        case setSelectedSuggestion:

            return {
                ...state,
                selectedSuggestion: action.payload
            }
        case clearSuggestions:

            return {
                ...state,
                suggestionsList: []
            }
        case isLoading:
                return {
                    ...state,
                    isLoadingSugesstions: !state.isLoading
                }
        default:
            return state
    }
}

export default productDetailsReducer;