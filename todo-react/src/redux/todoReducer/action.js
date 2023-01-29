import axios from "axios";
import {
	GET_TODO_FAILURE,
	POST_TODO_FAILURE,
	DELETE_TODO_FAILURE,
	UPDATE_TODO_FAILURE,
	POST_TODO_LOADING,
	GET_TODO_LOADING,
	UPDATE_TODO_LOADING,
	DELETE_TODO_LOADING,
	UPDATE_TODO_SUCCESS,
	DELETE_TODO_SUCCESS,
	GET_TODO_SUCCESS,
	POST_TODO_SUCCESS,
} from "./actionTypes";

import { notification } from "../../utils/notifier";

export const postTodoSuccess = (payload) => {
	return {
		type: POST_TODO_SUCCESS,
		payload,
	};
};

export const getTodoSuccess = (payload) => {
	return {
		type: GET_TODO_SUCCESS,
		payload,
	};
};

export const deleteTodoSuccess = (payload) => {
	return {
		type: DELETE_TODO_SUCCESS,
		payload,
	};
};

export const updateTodoSuccess = (payload) => {
	return {
		type: UPDATE_TODO_SUCCESS,
		payload,
	};
};

export const postTodoLoading = () => {
	return {
		type: POST_TODO_LOADING,
	};
};

export const getTodoLoading = () => {
	return {
		type: GET_TODO_LOADING,
	};
};

export const updateTodoLoading = () => {
	return {
		type: UPDATE_TODO_LOADING,
	};
};

export const deleteTodoLoading = () => {
	return {
		type: DELETE_TODO_LOADING,
	};
};

export const getTodoFailure = () => {
	return {
		type: GET_TODO_FAILURE,
	};
};

export const gettingTodos = () => (dispatch) => {
	dispatch(getTodoLoading());
	axios
		.get("https://json-server-16gv.onrender.com/todo")
		.then(({ data }) => {
			dispatch(getTodoSuccess(data));
		})
		.catch((err) => {
			console.log("error", err);
		});
};

export const postingTodos = (toast, payload) => (dispatch) => {
	dispatch(postTodoLoading());
	axios
		.post("https://json-server-16gv.onrender.com/todo", payload)
		.then(() => {
			dispatch(gettingTodos());
			notification(
				toast,
				"Task Added",
				"You have added task successfully",
				"success"
			);
		})
		.catch((err) => {
			console.log("error", err);
		});
};

export const deletingTodo = (toast, id) => (dispatch) => {
	dispatch(deleteTodoLoading());
	try {
		axios
			.delete(`https://json-server-16gv.onrender.com/todo/${id}`)
			.then(() => {
				dispatch(deleteTodoSuccess());
				notification(
					toast,
					"Task Deleted",
					"You have deleted task successfully",
					"success"
				);
				dispatch(gettingTodos());
			});
	} catch (err) {
		notification(
			toast,
			"Task not deleted",
			"Please try after some time",
			"error"
		);
	}
};

export const updatingTodo = (toast, id, payload) => (dispatch) => {
	console.log("id", id, "payload", payload);
	dispatch(updateTodoLoading());
	axios
		.patch(`https://json-server-16gv.onrender.com/todo/${id}`, payload)
		.then(() => {
			notification(
				toast,
				"Task Updated",
				"You have updated task successfully",
				"success"
			);
			dispatch(updateTodoSuccess());
			dispatch(gettingTodos());
		})
		.catch((err) => {
			notification(toast, "Failure", err.message, "error");
			dispatch(gettingTodos())
		});
	try {
	} catch (err) {
		notification(toast, "Failure", err.message, "error");
	}
};
