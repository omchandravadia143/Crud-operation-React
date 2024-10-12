const initialState = JSON.parse(localStorage.getItem("FORMDATA")) || [];

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD": {
            localStorage.setItem("FORMDATA", JSON.stringify([...state, action.payload]))
            return [...state, action.payload]
        };
            break;

        
            case "DELETE": {
            return state.filter((item, index) => { return (index !== action.payload) })
        };
            break;

        case "Edit": {
            const updated = state?.map((item, index) => {
                if (index === action.payload.editindex) {
                    return action.payload.editrecrd
                }
                else return item
            })
            return updated
        }
            break;
        case "SORT": {
            const sort = state.sort((a, b) => { return (a > b ? 1 : -1) });
            console.log([...sort]);
            return [...sort];
        }
            break;
        case "SEARCH": {
            const filtereddata = state.filter((item) => { return (item.fname.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()) )});
            console.log(filtereddata,action.payload);
            return filtereddata;
        }


        default: {
            return state || []
        }
    }
}
export { formReducer }