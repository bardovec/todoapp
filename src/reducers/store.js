import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducers } from './index';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['photosById', 'todoDetails'],
 };
const myPersistReducer = persistReducer(persistConfig, reducers);
const store = createStore(myPersistReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);
export default store;
