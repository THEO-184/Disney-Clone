import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../features/users/userSlice";
const store = configureStore({
	reducer: {
		user: userSliceReducer,
	},
});

export default store;
