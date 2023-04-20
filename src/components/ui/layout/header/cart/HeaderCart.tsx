import cn from 'clsx'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { RiShoppingBagLine } from 'react-icons/ri'

import Button from '@/components/ui/button/Button'
import SquareButton from '@/components/ui/button/SquareButton'

import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutSide'

import { convertPrice } from '@/utils/convertPrice'

import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const { isShow, ref, setIsShow } = useOutside(false)
	const { items, total } = useCart()
	const { push } = useRouter()
	console.log(isShow)

	return (
		<div className="relative" ref={ref}>
			<SquareButton
				Icon={RiShoppingBagLine}
				onClick={() => setIsShow(!isShow)}
				number={items.length}
			/>
			<div
				className={cn(
					'absolute top-[4vw]  -left-[3vw] bg-secondary px-[1vw] py-[1vw] z-30 text-white transition-all',
					isShow ? 'block' : 'hidden'
				)}
			>
				<div className="font-normal mb-[2vw]">My cart</div>

				<div>
					{items.length ? (
						items.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className="font-light">Cart is empty!</div>
					)}
				</div>

				<div>
					<div>Total:</div>
					<div>{convertPrice(total)}</div>
				</div>
				<div className="text-center">
					<Button variant="white" className=" mt-[2vw]">
						Place order
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Cart
