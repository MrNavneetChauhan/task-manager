export const notification = (toast, title, description, status) => {
	toast({
		title,
		description,
		status,
		duration: 5000,
		isClosable: true,
	});
};
