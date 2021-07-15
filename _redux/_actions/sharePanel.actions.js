import axios from 'axios'

const types = {
  show_panel: "ACTION_SHARE_PANEL_SHOW",
  hide_panel: "ACTION_SHARE_PANEL_HIDE"
}
const show_panel = (panelId) => {
  return {
    type: types.show_panel,
    panelId: panelId,
  }
}

const hide_panel = () => {
  return {
    type: types.hide_panel,
  }
}

export const sharePanelActions = {
  types,
  show_panel,
  hide_panel,
};