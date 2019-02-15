import { FETCH_USER_INCOME } from '../actions/types'

const defaultInitialStateIncomeReducer = {
    userIncome: null,
}

const incomeReducer = (state = defaultInitialStateIncomeReducer, action) => {
    switch (action.type) {
        case FETCH_USER_INCOME:
            return { ...state, userIncome: action.payload };
        default:
            return state;
    }
};

export default incomeReducer;