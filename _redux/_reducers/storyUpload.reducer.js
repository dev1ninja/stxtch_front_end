import { storyUploadActions } from '_redux/_actions'

//const initialState = {show_affirm_modal : false, show_share_modal : false, show_artifacts_modal : false, show_flag_modal : false,}
const initialState = {uploadContent_ID : 0}

export function storyUploadContent(state = initialState, action) {
  switch (action.type) {
    case storyUploadActions.types.show_uploadContent:
      return {
        ...state, uploadContent_ID : action.contentId
      }
    case storyUploadActions.types.hide_uploadContent:
      return {
        ...state, uploadContent_ID : 0 
      }
    default:
      return state;
  }
}
