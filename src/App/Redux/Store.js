import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";


// import logger from "redux-logger";

import {composeWithDevTools} from 'redux-devtools-extension'

import RootReducer from "./RootReducer";

const middleWare = [thunk];

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middleWare))) 


export default  store
