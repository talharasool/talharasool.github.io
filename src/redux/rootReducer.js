import { combineReducers } from 'redux';


import HomeReducer from '../pages/HomePage/reducer';
import productDetailsReducer from '../pages/ProductDetails/reducer'


const rootReducer = combineReducers({

    home: HomeReducer,
    productDetails: productDetailsReducer
});

export default rootReducer;