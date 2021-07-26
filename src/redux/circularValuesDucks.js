// constants
const dataInitial = {
  array: [20,60,10,80,30,65,100]
}


// types
const SET_VALUES_CIRCULAR = 'SET_VALUES_CIRCULAR'

// reducers
export default function circularValuesReducer(state = dataInitial, action){
  switch(action.type){
    case SET_VALUES_CIRCULAR:
      return {...state, array: action.payload}
    default:
      return state
  }
}


// actions

export const setNewValues = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SET_VALUES_CIRCULAR,
      payload: params
    })
  } catch (error) {
    console.log(error)
  }
}