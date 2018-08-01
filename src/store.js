import {createStore} from 'redux'; 

import {hotcoldReducer} from './reducers/index'

export default createStore(hotcoldReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

