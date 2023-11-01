import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery, setupListeners } from "@reduxjs/toolkit/query/react"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";


const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (builder) => ({
        fetching: builder.query({
            query: () => "/",
        }),
        sendMessage: builder.mutation({
            query: (body) => ({
                url: "/",
                method: "POST",
                body: body,
            }),
        }),
        sendProduct: builder.mutation({
            query: (body) => ({
                url: "/services",
                method: "POST",
                body: body,
            })
        }),
    }),
});

/*  ##############  */

const initialState = [{ name: "ahmed" }];

const mySlice = createSlice({
    name: "mySlice",
    initialState,
    reducers: {
        addData: (state, action) => {
            state = action.payload
            console.log(state);

        },
    },
});

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const reducer = combineReducers({
    user: mySlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

/* ################## */

const myStore = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        persistedReducer,
        user: mySlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
    devTools: true,
});

setupListeners(myStore.dispatch)

export const persistor = persistStore(myStore)

export const { addData } = mySlice.actions;

export const { useFetchingQuery, useSendMessageMutation, useSendProductMutation } = api;

export default myStore;