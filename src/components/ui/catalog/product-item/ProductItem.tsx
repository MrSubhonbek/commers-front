import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import AddToCartButton from './AddToCartButton'
import ProductRating from './ProductRating'
import { IProduct } from '@/interface/product.interface'

interface IProductItemProps {
	product: IProduct
}

const DynamicFavoriteButton = dynamic(() => import('./FavoriteButton'), {
	ssr: false
})

const ProductItem: FC<IProductItemProps> = ({ product }) => {
	return (
		<div>
			<div className="bg-white relative">
				<div className="absolute top-2 right-2 z-10">
					<DynamicFavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						width={300}
						height={300}
						src={product.images[0]}
						alt={product.name}
					/>
				</Link>
				<Link href={`/product/${product.slug}`}>
					<h3 className="mb-1">{product.name}</h3>
				</Link>
				<Link
					href={`/category/${product.category.slug}`}
					className="text-aqua text-sm mb-2"
				>
					{product.category.name}
				</Link>
				<ProductRating product={product} />
				<div>{product.price}</div>
			</div>
		</div>
	)
}

export default ProductItem
