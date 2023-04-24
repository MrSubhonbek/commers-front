import Image from 'next/image'
import React, { FC } from 'react'

import { convertPrice } from '@/utils/convertPrice'

import CartAction from './cart-action/CartAction'
import { ICartItem } from '@/interface/cart.interface'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className="flex gap-[2vh] mt-[2vh]">
			<Image
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.name}
			/>
			<div className="w-full">
				<div className="">{item.product.name}</div>
				<div>{convertPrice(item.product.price)}</div>
				<CartAction item={item} />
			</div>
		</div>
	)
}

export default CartItem
