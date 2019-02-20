import { FETCH_USER_EXPENSE,ADD_USER_EXPENSE, EDIT_USER_EXPENSE, DELETE_USER_EXPENSE} from '../actions/types'

const defaultInitialStateExpenseReducer = []


const expenseReducer = (state = defaultInitialStateExpenseReducer, action) => {
    switch (action.type) {
        case FETCH_USER_EXPENSE:
            return [...action.payload];

        case ADD_USER_EXPENSE:
            return [...state, ...action.payload]
            
        case EDIT_USER_EXPENSE:    
        console.log(action.payload,"<<<<<payload")
            return [...state,...action.payload]

        case DELETE_USER_EXPENSE:
            return [...action.payload]

        default:
            return state;
    }
};

export default expenseReducer;