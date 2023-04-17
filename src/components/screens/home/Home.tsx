import React, { FC } from 'react'

import Heading from '@/components/ui/Heading'
import { Meta } from '@/components/ui/Meta'
import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'

import { TypePaginationProduct } from '@/interface/product.interface'

const Home: FC<TypePaginationProduct> = ({ product }) => {
	return (
		<Meta title="Home">
			<Layout>
				<Catalog title="Freshed products" product={product} />
			</Layout>
		</Meta>
	)
}

export default Home
