import { FETCH_USER_INCOME , DELETE_USER_INCOME, ADD_USER_INCOME, EDIT_USER_INCOME} from '../actions/types'

const defaultInitialStateIncomeReducer =  []


const incomeReducer = (state = defaultInitialStateIncomeReducer, action) => {
    switch (action.type) {
        case FETCH_USER_INCOME:
            return [...action.payload];  

        case ADD_USER_INCOME:
            return [...state,...action.payload]

        case DELETE_USER_INCOME:
            return [...action.payload]

        case EDIT_USER_INCOME:
       
            return [...action.payload]

        default:
            return state;
    }
};

export default incomeReducer;