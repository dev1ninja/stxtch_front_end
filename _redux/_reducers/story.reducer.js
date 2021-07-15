import { storyActions } from '_redux/_actions'

const initialState = { stories: [], current: {}, storyId: null }

// const fakeImage_url = "/images/groupPage/";
export function story(state = initialState, action) {
  switch (action.type) {
    case storyActions.types.get:
      let i = 0;
      for( let each of action.payload){
        // each.title = each.summary
        each.author = each.user.firstName + " " + each.user.lastName
        console.log("this is for the exchange story")
      }
      console.log("this is action.payload", action.payload)
      return { ...state, stories: action.payload }
    case storyActions.types.getCurrent:
      console.log("this is current action.payload", action.payload)
      return { ...state, current: action.payload }
    case storyActions.types.setStoryId:
      return { ...state, storyId: action.payload }
    default:
      return state;
  }
}
