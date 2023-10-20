const initalState = [];

export const motoReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_MOTO':
            return [...state, action.moto];

        case "EDIT_MOTO":
            return state.map(i => {
                if (i.id === action.id) {
                    return {
                        ...i, ...action.update
                    }
                } else {
                    return i;
                }
            })

        case "REMOVE_MOTO":
            return state.filter(item => item.id !== action.myid)

        case "GET_MOTOS":
            return action.motos

        default:
            return state;
    }
}