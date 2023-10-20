const initalState = [];

export const blogReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return [...state, action.blog];

        case "EDIT_BLOG":
            return state.map(i => {
                if (i.id === action.id) {
                    return {
                        ...i, ...action.update
                    }
                } else {
                    return i;
                }
            })

        case "REMOVE_BLOG":
            return state.filter(item => item.id !== action.myid)

        case "GET_BLOGS":
            return action.blogs

        default:
            return state;
    }
}