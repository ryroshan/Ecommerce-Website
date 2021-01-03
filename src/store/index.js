import {createStore, combineReducers} from 'redux';
import ProductReducer from './reducers/ProductReducer';
import CartReducer from './reducers/CartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const root = combineReducers({
    ProductReducer,
    CartReducer
});

const store = createStore(root, composeWithDevTools());
export default store;