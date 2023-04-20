import { title } from 'process'
import React, { FC } from 'react'

import Heading from '../Heading'
import Loader from '../Loader'
import Button from '../button/Button'

import SortDropdown from './SortDropdown'
import ProductItem from './product-item/ProductItem'
import { IProduct } from '@/interface/product.interface'

interface ICatalogProps {
	product: IProduct[]
	isLoading?: boolean
	title?: string
	isPagination?: boolean
}

const Catalog: FC<ICatalogProps> = ({
	product,
	isLoading,
	title,
	isPagination = true
}) => {
	if (isLoading) return <Loader />

	return (
		<section>
			{title && <Heading title={title} />}
			{!!isPagination && <SortDropdown />}
			<div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 gap-[3vw] p-[3.5vw]">
				{product.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
			{isPagination && <Button className="mx-[3.5vw]">Load More</Button>}
		</section>
	)
}

export default Catalog
