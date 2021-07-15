import axios from 'axios'
import { groupActions } from './group.actions'

const types = {
  get: "ACTION_CUSTOMER_GET",
}

const get = (hostname) => async dispatch => {
  const response = await axios.get( "/api/customer", { params: { hostname } } )
  dispatch( {
    type: types.get,
    payload: response.data
  })
}

export const customerActions = {
  types,
  get,
};