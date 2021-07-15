import axios from 'axios'

const types = {
  show_modal: "ACTION_MODAL_SHOW",
  hide_modal: "ACTION_MODAL_HIDE"
}
const show_modal = (modalId) => {
  return {
    type: types.show_modal,
    modalId: modalId
  }
}

const hide_modal = () => {
  return {
    type: types.hide_modal,
  }
}

export const modalActions = {
  types,
  show_modal,
  hide_modal,
};