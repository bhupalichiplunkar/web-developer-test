import { combineReducers } from 'redux';

export const availableMenuReducer = (state=[],action) =>{
    return state;
}

export const selectedMenuReducer = (state={},action) =>{
    return state;
}

export const teamMembersReducer = (state=[],action) =>{
    return state;
}

export const selectedMembersReducer = (state={},action) =>{
    return state;
}

export const formReducer = (state={},action) =>{
    return state;
}


const reducers = combineReducers({
    availableMenus : availableMenuReducer,
    selectedMenu : selectedMenuReducer,
    teamMembers : teamMembersReducer,
    selectedMember : selectedMembersReducer,
    form : formReducer

});

export default reducers