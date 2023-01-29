import {
	DELETE_TODO_FAILURE,
	DELETE_TODO_LOADING,
	DELETE_TODO_SUCCESS,
	GET_TODO_FAILURE,
	GET_TODO_LOADING,
	GET_TODO_SUCCESS,
	POST_TODO_FAILURE,
	POST_TODO_LOADING,
	POST_TODO_SUCCESS,
	UPDATE_TODO_FAILURE,
	UPDATE_TODO_LOADING,
	UPDATE_TODO_SUCCESS,
} from "./actionTypes";

const init = {
	isLoading: true,
	isError: true,
	todo: [],
};
export const todoReducer = (state = init, { type, payload }) => {
	switch (type) {
		case GET_TODO_LOADING:
			return { ...state, isLoading: true, isError: true };
		case POST_TODO_LOADING:
			return { ...state, isLoading: true, isError: true };
		case UPDATE_TODO_LOADING:
			return { ...state, isLoading: true, isError: true };
		case DELETE_TODO_LOADING:
			return { ...state, isLoading: true, isError: true };

		case GET_TODO_SUCCESS:
			return { ...state, todo: payload, isLoading: false, isError: false };
		case POST_TODO_SUCCESS:
			return { ...state, isLoading: false, isError: false };
		case UPDATE_TODO_SUCCESS:
			return { ...state, isLoading: false, isError: false };
		case DELETE_TODO_SUCCESS:
			return { ...state, isLoading: false, isError: false };

		case GET_TODO_FAILURE:
			return { ...state, isLoading: false, isError: true };
		case POST_TODO_FAILURE:
			return { ...state, isLoading: false, isError: true };
		case UPDATE_TODO_FAILURE:
			return { ...state, isLoading: false, isError: true };
		case DELETE_TODO_FAILURE:
			return { ...state, isLoading: false, isError: true };
		default:
			return state;
	}
};
