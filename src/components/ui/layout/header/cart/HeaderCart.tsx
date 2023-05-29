import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { RiShoppingBagLine } from 'react-icons/ri'

import Button from '@/components/ui/button/Button'
import SquareButton from '@/components/ui/button/SquareButton'

import { useAction } from '@/hooks/useAction'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutSide'

import { convertPrice } from '@/utils/convertPrice'

import CartItem from './cart-item/CartItem'
import { OrderService } from '@/service/order.service'

const Cart: FC = () => {
	const { isShow, ref, setIsShow } = useOutside(false)
	const { items: cart, total } = useCart()
	const { reset } = useAction()
	const { push } = useRouter()

	const { mutate } = useMutation(
		['create order & payment'],
		() =>
			OrderService.place({
				items: cart.map(item => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id
				}))
			}),
		{
			async onSuccess({ data }) {
				push(data.confirmation.confirmation_url).then(() => reset())
			}
		}
	)

	return (
		<div className="relative" ref={ref}>
			<SquareButton
				Icon={RiShoppingBagLine}
				onClick={() => setIsShow(!isShow)}
				number={cart.length}
			/>
			<div
				className={cn(
					'absolute top-[4vw] w-[20vw] max-md:w-[300px] h-[50vh] overflow-auto flex flex-col justify-between -left-[17vw] max-md:-left-[270px] max-md:top-6 bg-secondary px-[1vw] py-[1vw] z-30 text-white transition-all',
					isShow ? 'block' : 'hidden'
				)}
			>
				<div>
					<div className="font-semibold mb-[2vw]">Моя корзина</div>

					<div>
						{cart.length ? (
							cart.map(item => <CartItem item={item} key={item.id} />)
						) : (
							<div className="font-light">Корзина пуста!</div>
						)}
					</div>
				</div>
				<div>
					<div className="mt-[2vh]">
						<div>Цена:</div>
						<div className="font-semibold">{convertPrice(total)}</div>
					</div>
					<div className="text-center">
						<Button
							variant="white"
							className=" mt-[2vw]"
							onClick={() => mutate()}
						>
							Оплатить
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
