import { FETCH_USER_DATA} from '../actions/types'

const defaultInitialStateUserReducer ={
    usersData : [],
}

const userReducer = (state = defaultInitialStateUserReducer, action) => {
    switch(action.type) {
        case FETCH_USER_DATA:
        return {...state, userData:action.payload };
        default : 
        return  state;
    }
};

export default userReducer;