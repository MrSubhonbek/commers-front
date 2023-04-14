import { title } from 'process'
import React, { FC } from 'react'

import Heading from '../Heading'
import Loader from '../Loader'

import ProductItem from './product-item/ProductItem'
import { IProduct } from '@/interface/product.interface'

interface ICatalogProps {
	product: IProduct[]
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalogProps> = ({ product, isLoading }) => {
	if (isLoading) return <Loader />

	return (
		<section>
			{title && <Heading title={title} />}
			{product.map(product => (
				<ProductItem product={product} key={product.id} />
			))}
		</section>
	)
}

export default Catalog
