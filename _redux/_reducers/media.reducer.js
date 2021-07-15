import { mediaActions } from '_redux/_actions'

const initialState = {media: [], groupmedia: [], storymedia: []}

export function media(state = initialState, action){
  switch (action.type){
    case mediaActions.types.get:
      return {...state, media: action.payload}
    case mediaActions.types.getGroupMedia:
      return {...state, groupmedia: action.payload}
    case mediaActions.types.getStoryMedia:
      return {...state, storymedia: action.payload}
    default:
      return state
  }
}