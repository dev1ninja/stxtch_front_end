import axios from 'axios'

const types = {
  set_title: "ACTION_HEADER_SET_TITLE",
  clear_title: "ACTION_HEADER_CLEAR_TITLE",
  set_whitebg: "ACTION_HEADER_SET_WHITEBG",
  remove_whitebg: "ACTION_HEADER_REMOVE_WHITEBG",
  set_header: "ACTION_HEADER_SET_HEADER",
  clear_header: "ACTION_HEADER_CLEAR_HEADER",
  hide_header: "ACTION_HEADER_HIDE_HEADER",
  show_header: "ACTION_HEADER_SHOW_HEADER"
}

const set_title = (title) => {
  return {
    type: types.set_title,
    payload: title
  }
}

const set_whitebg = () => {
  return {
    type: types.set_whitebg
  }
}

const remove_whitebg = () => {
  return {
    type: types.remove_whitebg
  }
}

const clear_title = () => {
  return {
    type: types.clear_title
  }
}

const clear_header = () => {
  return {
    type: types.clear_header
  }
}


const set_header = (data) => {
  return {
    type: types.set_header,
    payload: data
  }
}

const hide_header = () => {
  return {
    type: types.hide_header
  }
}

const show_header = () => {
  return {
    type: types.show_header
  }
}

export const headerActions = {
  types,
  set_title,
  clear_title,
  set_whitebg,
  remove_whitebg,
  set_header,
  clear_header,
  hide_header,
  show_header
};