import { ActionTypes } from "../contants/action-types";

const initialState = {
    // user:null,
     books: [],
     singleBook:[],
     booklist:[],
}
export const bookReducer= (state= initialState, {type, payload})=> {
 switch (type) {
    case ActionTypes.SET_BOOKS:
        return {...state, books:payload};
        case ActionTypes.GET_SINGLE_BOOK:
            return {...state, singleBook:payload};
            case ActionTypes.BOOK_LIST:
                return {...state, booklist:state.booklist.concat(payload)}     
                
    default:
        return state;
 }
}