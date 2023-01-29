import {
	Button,
	HStack,
	Input,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	UnorderedList,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deletingTodo, updatingTodo } from "../../redux/todoReducer/action";
export const TodoItems = ({ todo }) => {
	const dispatch = useDispatch();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [edit, setEdit] = useState({
		id: "",
		title: "",
	});

	const handleEditing = (e) => {
		const { name } = e.target;
		setEdit({ ...edit, [name]: e.target.value });
	};

	const handleOpenModal = () => {
		onOpen();
	};

	const handleUpdateTask = () => {
		dispatch(updatingTodo(toast, edit.id, edit));
	};

	return (
		<UnorderedList spacing={"3"}>
			{todo.map((item) => {
				return (
					<HStack
						p={"8px"}
						border={"1px solid lightgray"}
						borderRadius={"10px"}
						justifyContent={"space-between"}
						flexDirection={["column", "row"]}
						key={item.id}
					>
						<ListItem fontSize={"16px"}>{item.title}</ListItem>
						<HStack>
							<Button
								fontSize={["12px", "14px"]}
								colorScheme={"facebook"}
								h={["20px", "20px", "30px"]}
								w={["60px", "60px", "80px"]}
								onClick={() => {
									handleOpenModal();
									setEdit(item);
								}}
							>
								Update
							</Button>

							<Button
								fontSize={["12px", "14px"]}
								h={["20px", "20px", "30px"]}
								w={["60px", "60px", "80px"]}
								colorScheme={"facebook"}
								onClick={() => dispatch(deletingTodo(toast, item.id))}
							>
								Delete
							</Button>
						</HStack>
					</HStack>
				);
			})}

			{/* modal code which will open only when onOpen will  */}
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Update Task</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<HStack flexDirection={["column", "row"]}>
							<Input
								onChange={(e) => handleEditing(e)}
								value={edit.title}
								placeholder="Enter to add task"
								name="title"
							/>
							<Button
								onClick={() => handleUpdateTask()}
								w={"150px"}
								colorScheme={"facebook"}
							>
								Update
							</Button>
						</HStack>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="red" mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</UnorderedList>
	);
};
