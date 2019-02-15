import { FETCH_USER_DATA, FETCH_USER_INFO} from '../actions/types'

const defaultInitialStateUserReducer ={
    usersData : null,
}

const userReducer = (state = defaultInitialStateUserReducer, action) => {
    switch(action.type) {
        case FETCH_USER_DATA:
        return {...state, usersData : action.payload };
        case FETCH_USER_INFO : 
        return {...state, userId:{ id : action.payload}}
        default : 
        return  state;
    }
};

export default userReducer;