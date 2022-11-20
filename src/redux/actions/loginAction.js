import { ActionTypes } from "../contants/action-types";
export const setUser=(user)=> dispatch=>{
  
    dispatch({
      type: ActionTypes.SET_USER,
      payload:user
    })
  
}

export const removeUser=(user)=>dispatch=> {
  dispatch({
    type: ActionTypes.REMOVE_USER,
    payload:user
  })
}