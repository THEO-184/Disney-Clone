import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../features/users/userSlice";
import movieSliceReducer from "../features/movie/movieSlice";
const store = configureStore({
	reducer: {
		user: userSliceReducer,
		movie: movieSliceReducer,
	},
});

export default store;
