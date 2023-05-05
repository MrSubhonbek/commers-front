import React, { FC } from 'react'
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi'

import { useAction } from '@/hooks/useAction'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/interface/cart.interface'

interface ICartActionProps {
	item: ICartItem
}
const CartAction: FC<ICartActionProps> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useAction()
	const { items } = useCart()
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity
	return (
		<div className="mt-3">
			<div className="flex items-center gap-3">
				<button
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					<FiMinus />
				</button>

				<input
					disabled
					readOnly
					value={quantity}
					className="w-10  text-center"
				/>

				<button onClick={() => changeQuantity({ id: item.id, type: 'plus' })}>
					<FiPlus />
				</button>

				<button
					onClick={() => removeFromCart({ id: item.id })}
					className="ml-3 "
				>
					<FiTrash />
				</button>
			</div>
		</div>
	)
}

export default CartAction
