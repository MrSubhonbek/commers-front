import React, { FC } from 'react'

import Loader from '../Loader'

import ProductItem from './product-item/ProductItem'
import { IProduct } from '@/interface/product.interface'

interface ICatalogProps {
	product: IProduct[]
	isLoading?: boolean
}

const Catalog: FC<ICatalogProps> = ({ product, isLoading }) => {
	if (isLoading) return <Loader />

	return (
		<section>
			{product.map(product => (
				<ProductItem product={product} key={product.id} />
			))}
		</section>
	)
}

export default Catalog
