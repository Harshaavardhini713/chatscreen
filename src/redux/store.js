import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import counterReducer from './reducer/counterReducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const reducers = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
