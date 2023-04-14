import React, { FC } from 'react'

import Heading from '@/components/ui/Heading'
import { Meta } from '@/components/ui/Meta'
import Catalog from '@/components/ui/catalog/Catalog'

import {
	TypePaginationProduct,
	TypeProduct
} from '@/interface/product.interface'

const Home: FC<TypePaginationProduct> = ({ product, length }) => {
	return (
		<Meta title="Home">
			<Heading title="Hello world" />
			<Catalog product={product} />
		</Meta>
	)
}

export default Home
