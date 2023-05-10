import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { convertPrice } from '@/utils/convertPrice'

import Images from '../../Images'

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
		<div className="animate-scaleIn hover:shadow-lg backdrop-blur-sm transition text-[#123133] duration-300 ease-in-out">
			<div className="bg-white relative overflow-hidden h-full shadow-md">
				<div className="absolute top-2 right-2 z-10">
					<DynamicFavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<div className="w-full ">
						<Images images={product.images} />
					</div>
				</Link>
				<div className="p-[2vh] h-full">
					<Link href={`/product/${product.slug}`}>
						<h3 className="text-[#123133]">{product.name}</h3>
					</Link>
					<Link
						href={`/category/${product.category.slug}`}
						className="text-aqua text-[1.5vh] max-md:text-[1.5vw] mb-2"
					>
						{product.category.name}
					</Link>
					<ProductRating product={product} />
					<div className="text-[3.5vh] max-md:text-[3.5vw] text-[#A86550] font-semibold">
						{convertPrice(product.price)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
