import Image from 'next/image'
import React, { FC } from 'react'

import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'
import { IProduct } from '@/interface/product.interface'

interface IProductItemProps {
	product: IProduct
}

const ProductItem: FC<IProductItemProps> = ({ product }) => {
	return (
		<div className="mb-20">
			<div>
				<FavoriteButton productId={product.id} />
				<AddToCartButton product={product} />
				<Image
					width={300}
					height={300}
					src={product.images[0]}
					alt={product.name}
				/>
				<h3>{product.name}</h3>
				<div>{product.category.name}</div>
				<ProductRating product={product} />
				<div>{product.price}</div>
			</div>
		</div>
	)
}

export default ProductItem
