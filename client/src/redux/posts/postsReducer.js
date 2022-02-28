import React from 'react'
import {CREATE_POST} from './postTypes.js'

const initialState = {
  post:'ashu'
}

const postsReducer = (state = initialState,action) => {
  switch(action.type){
    case CREATE_POST:{
      return state;
    }
    default:
      return state;

  }
  
}

export default postsReducer