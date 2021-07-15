import { combineReducers } from "redux";

import { auth } from './auth.reducer'
import { header } from './header.reducer'
import { group } from './group.reducer'
import { story } from './story.reducer'
import { customer } from './customer.reducer'
import { modal } from './modal.reducer'
import { media } from './media.reducer'
import { storyUploadContent } from './storyUpload.reducer'

const rootReducer = combineReducers({
  auth,
  header,
  group,
  story,
  customer,
  modal,
  media,
  storyUploadContent
});

export default rootReducer;
