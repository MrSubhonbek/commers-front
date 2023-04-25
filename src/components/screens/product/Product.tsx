import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { FC, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Rating } from 'react-simple-star-rating'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Button from '@/components/ui/button/Button'

import { useProfile } from '@/hooks/useProfile'

import { convertPrice } from '@/utils/convertPrice'

import Images from './Images'
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
		<div className="flex justify-center gap-[1vw] mt-[1vw]">
			<div className="w-[35vw] h-[35vw]">
				<Images images={product.images} />
			</div>
			<div className="flex flex-col justify-between">
				<div>
					<h3 className="font-semibold text-[2.5vw]">{product.name}</h3>
					<h3 className="font-semibold text-[2.5vw]  my-[3vh]">
						{convertPrice(product.price)}
					</h3>
					<h3>{product.descriptios}</h3>
					<h3 className="font-semibold mt-[3vh] mb-[1vh]">
						Total Review :{' '}
						<span className="font-normal">{product.reviews.length}</span>
					</h3>
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
					<Button className="w-full py-[1vw]" variant="dark">
						Add To Cart
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
