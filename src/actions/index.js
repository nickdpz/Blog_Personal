export const addProductCar = (payload) => ({
	type: 'ADD_PRODUCT',
	payload,
});

export const removeProductCar = (payload) => ({
	type: 'REMOVE_PRODUCT',
	payload,
});

export const clearProductCar = (payload) => ({
	type: 'CLEAR_PRODUCT',
	payload,
});