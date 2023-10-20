const initalState = [];

export const loginReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.user];

        case "EDIT_USER":
            return state.map(i => {
                if (i.id === action.id) {
                    return {
                        ...i, ...action.update
                    }
                } else {
                    return i;
                }
            })

        case "REMOVE_USER":
            return state.filter(item => item.id !== action.myid)

        case "GET_USERS":
            return action.users

        default:
            return state;
    }
}