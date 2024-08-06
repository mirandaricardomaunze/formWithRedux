import {applyMiddleware, createStore} from 'redux'
import {thunk }from 'redux-thunk'
import reducerData from './reducerFetch'





const store=createStore(reducerData,applyMiddleware(thunk))
export default store