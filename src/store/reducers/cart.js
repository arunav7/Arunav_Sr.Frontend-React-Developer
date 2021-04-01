import * as actionTypes from '../actions/actions'

const DELIVERY_CHARGE = 40

const initialState = {
    items: [],
    totalPrice: 0,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                items: state.items.concat(action.item),
                totalPrice: state.totalPrice + (action.item.price - action.item.discountPrice) + DELIVERY_CHARGE,
                error: false
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.item.id),
                totalPrice: state.totalPrice - (action.item.price - action.item.discountPrice) - DELIVERY_CHARGE,
                error: false
            }
        case actionTypes.ORDER_SUCCESS:
            return {
                ...state,
                items: [],
                totalPrice: 0,
                error: false
            }    
        default:
            return state
    }
}

export default reducer