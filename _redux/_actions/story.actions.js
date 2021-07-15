import axios from 'axios'

const types = {
  get: "ACTION_STORY_GET",
  getCurrent: "ACTION_STORY_GET_CURRENT",
  setStoryId: "ACTION_STORY_SET_STORYID",
  goNext: "ACTION_STORY_GO_NEXT",
  goPrev: "ACTION_STORY_GO_PREV",
}

const get = ( {groupId} ) => async dispatch => {
  const response = await axios.get( "/api/stories", { params: { groupId } } )
  // console.log( types.get, response.data.stories)
  dispatch( {
    type: types.get,
    payload: response.data.stories
  })
}

const getCurrent = ( storyId ) => async dispatch => {
  try{
    const response = await axios.get( `/api/story/${storyId}` )
    console.log( types.get, response.data.stories)
    const currentStory = response.data.stories
    dispatch( {
      type: types.getCurrent,
      payload: currentStory
    })
    get( { groupId: currentStory.groupId } )(dispatch)
  }
  catch(e){

  }
}

export const storyActions = {
  types,
  get,
  getCurrent,
};