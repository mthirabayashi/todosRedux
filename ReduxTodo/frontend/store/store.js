import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';
import MasterMiddleware from '../middleware/master_middleware';

const preloadedState = {todos:{}};

const configureStore = (state = preloadedState) => (
  createStore(rootReducer, state, MasterMiddleware)
);

export default configureStore;
