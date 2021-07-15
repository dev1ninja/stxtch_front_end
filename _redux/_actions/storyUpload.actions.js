import axios from 'axios'

const types = {
  show_uploadContent: "ACTION_UPLOAD_CONTENT_SHOW",
  hide_uploadContent: "ACTION_UPLOAD_CONTENT_HIDE"
}
const show_uploadContent = (contentId) => {
  return {
    type: types.show_uploadContent,
    contentId: contentId
  }
}

const hide_uploadContent = () => {
  return {
    type: types.hide_uploadContent,
  }
}

export const storyUploadActions = {
  types,
  show_uploadContent,
  hide_uploadContent,
};