import axios from 'axios'

const types = {
  get: "ACTION_MEDIA_GET",
  getGroupMedia: "ACTION_MEDIA_GROUP_GET",
  getStoryMedia: "ACTION_MEDIA_STORY_GET",
}

const get = () => async dispatch => {
  const response = await axios.get('/api/media')
  dispatch({
    type: types.get,
    payload: response.data
  })
}

const getGroupMedia = ( mediaId ) => async dispatch => {
  const response = await axios.get(`/api/media/group/${mediaId}`)
  dispatch( {
    type: types.getGroupMedia,
    payload: response.data
  })
}

const getStoryMedia = ( mediaId ) => async dispatch => {
  const response = await axios.get(`/api/media/story/${mediaId}`)
  dispatch( {
    type: types.getStoryMedia,
    payload: response.data
  })
}

export const mediaActions = {
  types,
  get,
  getGroupMedia,
  getStoryMedia,
};