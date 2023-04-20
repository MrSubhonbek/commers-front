import { useQuery } from '@tanstack/react-query'
import React, { FC, useState } from 'react'

import Heading from '../Heading'
import Loader from '../Loader'
import Button from '../button/Button'

import SortDropdown from './SortDropdown'
import ProductItem from './product-item/ProductItem'
import {
	EnumProductSort,
	TypePaginationProduct
} from '@/interface/product.interface'
import { ProductService } from '@/service/product.service'

interface ICatalogPaginationProps {
	data: TypePaginationProduct
	title?: string
	isLoading?: boolean
}

const CatalogPagination: FC<ICatalogPaginationProps> = ({ data, title }) => {
	const [page, setPage] = useState(1)
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)
	const { data: response, isLoading } = useQuery(
		['product', sortType],
		() =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType
			}),
		{
			initialData: data
		}
	)
	if (isLoading) return <Loader />

	return (
		<section>
			{title && <Heading title={title} />}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			<div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 gap-[3vw] p-[3.5vw]">
				{response.product.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
			<div className="w-full text-end">
				<Button
					onClick={() => {
						setPage(page => page + 1)
						console.log(page)
					}}
					variant="white"
					className="mx-[3.5vw]"
				>
					Load More
				</Button>
			</div>
		</section>
	)
}

export default CatalogPagination
