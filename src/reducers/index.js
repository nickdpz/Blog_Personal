const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT':
			let productsA = state.productsCar;
			const i = productsA.map((e) => { return e.id; }).indexOf(action.payload.id);
			if (i === -1) {
				const data = {
					count: 1,
					id: action.payload.id,
					price: action.payload.price,
					name: action.payload.name
				}
				return {
					...state,
					productsCar: [...state.productsCar, data],
					total: state.total + action.payload.price
				};
			} else {
				productsA[i].count = productsA[i].count + 1;
				return {
					...state,
					productsCar: productsA,
					total: state.total + action.payload.price
				};
			}
		case 'REMOVE_PRODUCT':
			let productsR = state.productsCar;
			const j = productsR.map((e) => { return e.id; }).indexOf(action.payload.id);
			if (productsR[j].count === 1) {
				return {
					...state,
					productsCar: productsR.filter((items) => items.id !== action.payload.id),
					total: state.total - action.payload.price
				};
			} else {
				productsR[j].count = productsR[j].count - 1;
				return {
					...state,
					productsCar: productsR,
					total: state.total - action.payload.price
				};
			}
		case 'CLEAR_PRODUCT':
			return {
				...state,
				productsCar: [],
				total: 0
			};
		default:
			return state;
	}
};

export default reducer;
