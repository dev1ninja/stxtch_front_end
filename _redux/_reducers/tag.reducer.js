import { defaultMaxListeners } from 'events'
import { tagActions } from '_redux/_actions'

const initialState = {tags: [], grouptags: [], storytags: []}

export function tag(state = initialState, action){
  switch (action.type){
    case tagActions.type.get:
      return {...state, tags: action.payload}
    case tagActions.types.getGroupTag:
      return {...state, grouptags: action.payload}
    case tagActions.types.getStoryTag:
      return {...state, storytags: action.payload}
    default:
      return state
  }
}