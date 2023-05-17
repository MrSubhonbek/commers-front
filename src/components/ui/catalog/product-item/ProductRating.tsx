import React, { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '@/interface/product.interface'

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
	return (
		<div className="mb-2 ">
			<div className="mr-1 flex items-center">
				<Rating
					readonly
					initialValue={rating}
					SVGstyle={{
						fill: '#fff1a',
						display: `inline-block`
					}}
					SVGstrokeColor="#123132"
					size={20}
					allowFraction
					transition
				/>
			</div>
			<div className="text-[1.3vh] text-[#123133]">
				({product.reviews.length} оценок)
			</div>
		</div>
	)
}

export default ProductRating
