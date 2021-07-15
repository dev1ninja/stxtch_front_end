import { headerActions } from '_redux/_actions'

const initialState = { title: null, bg: null, sticky:false, divider: true, back: false, display: true,}

export function header(state = initialState, action) {
  switch (action.type) {
    case headerActions.types.set_title:
      return {
        ...state,
        title: action.payload
      };
    case headerActions.types.clear_title:
      return { ...state, title: null}
    case headerActions.types.set_whitebg:
      return { ...state, bg: "white"}
    case headerActions.types.remove_whitebg:
      return { ...state, bg: null}
    case headerActions.types.set_header:
      return { ...state, ...action.payload }
    case headerActions.types.hide_header:
      return { ...state, display: false }
    case headerActions.types.show_header:
      return { ...state, display: true }
    case headerActions.types.clear_header:
      return initialState;
    default:
      return state;
  }
}
