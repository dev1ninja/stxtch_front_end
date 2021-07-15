import { groupActions } from '_redux/_actions'

const initialState = { groups: []}

export function group(state = initialState, action) {
  switch (action.type) {
    case groupActions.types.get:
      let i = 0;
      for( let each of action.payload){
        each.comment = each.name
      }
      return { ...state, groups: action.payload }
    default:
      return state;
  }
}
