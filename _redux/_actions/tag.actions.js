import axios from 'axios'

const types = {
  get: "ACTION_TAG_GET",
  getGroupTag: "ACTION_TAG_GROUP_GET",
  getStoryTag: "ACTION_TAG_STORY_GET",
}

const get = () => async dispatch => {
  const response = await axios.get('/api/tag')
  dispatch({
    type: types.get,
    payload: response.data
  })
}

const getGroupTag = ( tagId ) => async dispatch => {
  const response = await axios.get(`/api/tag/group/${tagId}`)
  dispatch( {
    type: types.getGroupTag,
    payload: response.data
  })
}

const getStoryTag = ( tagId ) => async dispatch => {
  const response = await axios.get(`/api/tag/story/${tagId}`)
  dispatch( {
    type: types.getStoryTag,
    payload: response.data
  })
}

export const tagActions = {
  types,
  get,
  getGroupTag,
  getStoryTag
};