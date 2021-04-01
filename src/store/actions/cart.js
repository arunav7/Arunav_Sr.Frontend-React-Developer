import * as actionTypes from './actions'

export const addItem = (item) => ({
    type: actionTypes.ADD_ITEM,
    item
})

export const removeItem = (item) => ({
    type: actionTypes.REMOVE_ITEM,
    item
})

export const orderSuccess = () => ({
    type: actionTypes.ORDER_SUCCESS
})