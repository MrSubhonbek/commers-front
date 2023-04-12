import Image from 'next/image'
import React, { FC } from 'react'

import { IProduct } from '@/interface/product.interface'

interface IProductItemProps {
	product: IProduct
}

const ProductItem: FC<IProductItemProps> = ({ product }) => {
	return (
		<div>
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
				<ProductRaiting rating={product.rating} />
				<div>{product.price}</div>
			</div>
		</div>
	)
}

export default ProductItem
