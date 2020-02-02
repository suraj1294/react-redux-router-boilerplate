import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export function configureStore() { 
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || 
                            compose; 
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)));
return store; 
}
