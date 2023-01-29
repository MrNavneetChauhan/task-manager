import { Box, Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { gettingTodos, postingTodos } from "../../redux/todoReducer/action";
export const AddTodo = () => {
	const [title, setTitle] = useState("");
	const dispatch = useDispatch();
	const toast = useToast();
	const payload = {
		id: v4(),
		title,
	};

	const handleAddTodo = () => {
		dispatch(postingTodos(toast, payload));
		setTitle("");
	};
	return (
		<HStack gap={"10px"} flexDirection={["column", "row"]}>
			<Input
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				placeholder="Enter to add task"
			/>
			<Button
				onClick={() => handleAddTodo()}
				w={"150px"}
				colorScheme={"facebook"}
			>
				Add a Task
			</Button>
		</HStack>
	);
};
