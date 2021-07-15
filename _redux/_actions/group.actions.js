import axios from 'axios'

const types = {
  get: "ACTION_GROUP_GET",
}

const get = (customerId) => async dispatch => {
  const response = await axios.get( "/api/group", { params: {hostname: location.hostname} } )
  dispatch( {
    type: types.get,
    payload: response.data.groups
  })
}

export const groupActions = {
  types,
  get,
};