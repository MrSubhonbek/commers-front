import { cartSlice } from './cart/cart.slice'
import * as userActions from './user/user.action'

export const Actions = {
	...userActions,
	...cartSlice.actions
}
