import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { FC, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Rating } from 'react-simple-star-rating'

import Button from '@/components/ui/button/Button'

import { useAction } from '@/hooks/useAction'
import { useCart } from '@/hooks/useCart'
import { useProfile } from '@/hooks/useProfile'

import { convertPrice } from '@/utils/convertPrice'

import Images from '../../ui/Images'

import { IProduct } from '@/interface/product.interface'
import { UserServices } from '@/service/user.service'

interface IProductProps {
	product: IProduct
}
const Product: FC<IProductProps> = ({ product }) => {
	const { profile } = useProfile()

	const queryClient = useQueryClient()
	const { mutate } = useMutation(
		['toggle favorite'],
		() => UserServices.toggleFavorite(product.id.toString()),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)
	const { addToCart, removeFromCart } = useAction()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)
	const isExists = profile?.favorites?.some(
		favorite => favorite.id === product.id
	)

	const [rating, setRating] = useState(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)

	return (
		<div className="flex justify-center gap-[1vw] mt-[1vw] max-md:flex-col max-md:h-[90vh]">
			<div className="w-[35vw] h-[35vw] max-md:w-full max-md:h-full">
				<Images images={product.images} />
			</div>
			<div className="flex flex-col justify-between">
				<div>
					<h3 className="font-semibold text-xl">{product.name}</h3>
					<div className="font-semibold text-xl  my-[3vh]">
						{convertPrice(product.price)}
					</div>
					<span>{product.descriptios}</span>
					<div className="font-semibold mt-[3vh] mb-[1vh]">
						Общая оценка :{' '}
						<span className="font-normal">{product.reviews.length}</span>
					</div>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{
							display: `inline-block`
						}}
						SVGstrokeColor="#123132"
						size={40}
						allowFraction
						transition
					/>
				</div>
				<div className="w-full flex gap-[1vw]">
					<Button
						className="w-full py-[1vw]"
						onClick={() =>
							currentElement
								? removeFromCart({ id: currentElement.id })
								: addToCart({ product, quantity: 1, price: product.price })
						}
						variant="dark"
					>
						{currentElement ? 'Удалить из корзина' : 'Добавить в корзина'}
					</Button>
					{profile && (
						<Button
							className="w-[5vw] flex items-center justify-center "
							onClick={() => mutate()}
							variant="dark"
						>
							{isExists ? <AiFillHeart /> : <AiOutlineHeart />}
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Product
