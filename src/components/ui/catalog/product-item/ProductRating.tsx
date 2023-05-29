import { useMutation } from '@tanstack/react-query'
import React, { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { useProfile } from '@/hooks/useProfile'

import { IProduct } from '@/interface/product.interface'
import { IReviewData } from '@/interface/review.interface'
import { ReviewService } from '@/service/review.service'

interface IRatingProps {
	product: IProduct
}
const ProductRating: FC<IRatingProps> = ({ product }) => {
	const [rating, setRating] = useState(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)
	const { profile } = useProfile()

	const { mutate } = useMutation(['leave product'], (data: IReviewData) =>
		ReviewService.leave({
			rating: data.rating,
			text: data.text,
			productId: Number(product?.id)
		})
	)
	return (
		<div className="mb-2 ">
			<div className="mr-1 flex items-center">
				<Rating
					initialValue={rating}
					SVGstyle={{
						display: `inline-block`
					}}
					size={20}
					transition
					onClick={(rate: number) => {
						mutate({ productId: Number(profile?.id), rating: rate, text: '' })
						setRating(rate)
						window.location.reload()
					}}
				/>
			</div>
			<div className="text-[1.3vh] text-[#123133]">
				({product.reviews.length} оценок)
			</div>
		</div>
	)
}

export default ProductRating
