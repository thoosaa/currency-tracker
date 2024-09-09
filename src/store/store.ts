import {createStore} from "redux";
import themeReducer from "./reducers/reducer";

const store = createStore(themeReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
