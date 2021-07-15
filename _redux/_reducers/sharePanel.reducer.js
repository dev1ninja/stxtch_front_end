import { sharePanelActions } from '_redux/_actions'

//const initialState = {show_affirm_modal : false, show_share_modal : false, show_artifacts_modal : false, show_flag_modal : false,}
const initialState = {panel_ID : 0}

export function modal(state = initialState, action) {
  switch (action.type) {
    case sharePanelActions.types.show_panel:
      return {
        ...state, panel_ID : action.panelId
      }
    case sharePanelActions.types.hide_panel:
      return {
        ...state, panel_ID : 0 
      }
    default:
      return state;
  }
}
