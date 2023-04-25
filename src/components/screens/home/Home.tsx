import React, { FC } from 'react'

import { Meta } from '@/components/ui/Meta'
import CatalogPagination from '@/components/ui/catalog/CatalogPagination'
import Layout from '@/components/ui/layout/Layout'

import { TypePaginationProduct } from '@/interface/product.interface'

const Home: FC<TypePaginationProduct> = data => {
	return (
		<Meta title="Home">
			<Layout>
				<CatalogPagination title="Products" data={data} />
			</Layout>
		</Meta>
	)
}

export default Home
