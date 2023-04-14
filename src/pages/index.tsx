import { GetStaticProps, NextPage } from 'next'
import React from 'react'

import Home from '@/components/screens/home/Home'

import { TypePaginationProduct } from '@/interface/product.interface'
import { ProductService } from '@/service/product.service'

const HomePage: NextPage<TypePaginationProduct> = ({ length, product }) => {
	return <Home length={length} product={product} />
}

export const getStaticProps: GetStaticProps<
	TypePaginationProduct
> = async () => {
	const { data } = await ProductService.getAll({
		page: 1,
		perPage: 8
	})

	return {
		props: data
	}
}

export default HomePage
