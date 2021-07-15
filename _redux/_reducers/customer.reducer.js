import { customerActions } from '_redux/_actions'

export function customer(state = {}, action) {
  switch (action.type) {
    case customerActions.types.get:
      return action.payload
    default:
      return state;
  }
}
