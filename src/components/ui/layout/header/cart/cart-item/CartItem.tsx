import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { convertPrice } from '@/utils/convertPrice'

import CartAction from './cart-action/CartAction'
import { ICartItem } from '@/interface/cart.interface'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className="flex gap-[2vh] mt-[2vh] max-md:flex-col">
			<div className="w-[10vw] max-md:w-full">
				<Image
					src={item.product.images[0]}
					loading="lazy"
					width={100}
					height={100}
					className="max-md:w-full"
					alt={item.product.name}
				/>
			</div>
			<div className="w-full">
				<Link href={`product/${item.product.slug}`}>{item.product.name}</Link>
				<div>{convertPrice(item.product.price)}</div>
				<CartAction item={item} />
			</div>
		</div>
	)
}

export default CartItem
