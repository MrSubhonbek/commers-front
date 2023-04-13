import React, { FC } from 'react'
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'

import { useAction } from '@/hooks/useAction'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/interface/product.interface'

interface IProductItemProps {
	product: IProduct
}
const AddToCartButton: FC<IProductItemProps> = ({ product }) => {
	const { addToCart, removeFromCart } = useAction()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div>
			<button
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({ product, quantity: 1, price: product.price })
				}
			>
				{currentElement ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
			</button>
		</div>
	)
}

export default AddToCartButton
