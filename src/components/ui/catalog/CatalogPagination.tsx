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
		['product', sortType, page],
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
	const ln = response.length % 4

	return (
		<section className="flex flex-col h-full">
			{title && <Heading title={title} />}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			<div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 gap-[3vw] p-[3.5vw]">
				{response.product.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
			<div className="flex-grow"></div>
			<div className="text-center align-bottom">
				{Array.from({ length: (response.length + ln) / 4 }).map((_, index) => {
					const pageNumber = index + 1
					return (
						<Button
							key={index}
							className="mr-[3.5vw] text-[1.3vh]"
							variant={page === pageNumber ? 'orange' : 'white'}
							onClick={() => setPage(pageNumber)}
						>
							{pageNumber}
						</Button>
					)
				})}
			</div>
		</section>
	)
}

export default CatalogPagination
