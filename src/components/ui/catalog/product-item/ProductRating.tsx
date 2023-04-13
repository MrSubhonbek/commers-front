import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '@/interface/product.interface'
import { ReviewService } from '@/service/review.service'

interface IRatingProps {
	product: IProduct
}
const ProductRating: FC<IRatingProps> = ({ product }) => {
	const { data: rating } = useQuery(
		['get product rating', product.id],
		() => ReviewService.getAverage(product.id.toString()),
		{
			select: ({ data }) => data
		}
	)
	return (
		<div>
			<Rating
				readonly
				initialValue={rating}
				SVGstyle={{
					display: `inline-block`
				}}
				size={34}
				allowFraction
				transition
			/>
			<span>({product.reviews.length} reviews)</span>
		</div>
	)
}

export default ProductRating
