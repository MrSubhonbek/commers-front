import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React from 'react'

import { Meta } from '@/components/ui/Meta'
import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'

import { ProductService } from '@/service/product.service'

const SearchPage = () => {
	const { query } = useRouter()
	const { data } = useQuery(['search products', query.searchTerm], () =>
		ProductService.getAll({ searchTerm: query.searchTerm as string })
	)
	console.log(data)

	return (
		<Meta title="Search">
			<Layout>
				<Catalog
					product={data?.product || []}
					title={`Search by request ${query.searchTerm || ''}`}
				/>
			</Layout>
		</Meta>
	)
}

export default SearchPage
