import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import kanbanReducers from './Slices/Slice'

const persistConfig = {
    key: 'rootReducer',
    storage,
}

const persistedKanbanReducers = persistReducer(persistConfig, kanbanReducers)

export const store = configureStore({
    reducer: {
        kanban: persistedKanbanReducers,
    },
    // The below middleware is used To remove serializable check on functions listed in array below.
  // This serializable check is the routine of persist library. if check not ignored then it will show warnings.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)