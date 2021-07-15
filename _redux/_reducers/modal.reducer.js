import { modalActions } from '_redux/_actions'

//const initialState = {show_affirm_modal : false, show_share_modal : false, show_artifacts_modal : false, show_flag_modal : false,}
const initialState = {modal_ID : 0}

export function modal(state = initialState, action) {
  switch (action.type) {
    case modalActions.types.show_modal:
      return {
        ...state, modal_ID : action.modalId
      }
    case modalActions.types.hide_modal:
      return {
        ...state, modal_ID : 0 
      }
    default:
      return state;
  }
}
