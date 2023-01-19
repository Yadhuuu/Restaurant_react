import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { restauratReducers } from './reducers/restaurantReducer'



const reducers = combineReducers({
    restaurantList:restauratReducers
})

const middleware = [thunk]

const store = createStore(reducers,applyMiddleware(...middleware))

export default store