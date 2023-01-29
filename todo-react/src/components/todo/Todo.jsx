import { Box, Divider, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettingTodos } from "../../redux/todoReducer/action";
import { AddTodo } from "./AddTodo";
import { TodoItems } from "./TodoItems";

export const Todo = () => {
	const { isLoading, isError, todo } = useSelector(
		(store) => store.todoReducer
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(gettingTodos());
	}, []);

	return (
		<Box
			w={["50vh", "60vh", "100vh"]}
			m="auto"
			border={"1px solid lightgray"}
			borderRadius="10px"
			p="20px"
		>
			<Heading textAlign={"center"} mb="20px" fontSize={"25px"}>
				Task Manager
			</Heading>
			<AddTodo />
			<Divider mt={"30px"} mb={"10px"} />
			{isLoading ? <h1>Loading...</h1> : <TodoItems todo={todo} />}
		</Box>
	);
};
