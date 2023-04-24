import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

import { Meta } from '@/components/ui/Meta'
import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'

import { ICategory } from '@/interface/category.interface'
import { IProduct } from '@/interface/product.interface'
import { CategoryService } from '@/service/category.service'
import { ProductService } from '@/service/product.service'

interface ICategoryPageProps {
	products: IProduct[]
	category: ICategory
}
const CategoryPage: NextPage<ICategoryPageProps> = ({ category, products }) => {
	return (
		<Meta title={category.name}>
			<Layout>
				<Catalog product={products || []} title={category.name} />
			</Layout>
		</Meta>
	)
}
export const getStaticPaths: GetStaticPaths = async () => {
	const categories = await CategoryService.getAll()
	const paths = categories.data.map(category => {
		return {
			params: { slug: category.slug }
		}
	})

	return { paths, fallback: 'blocking' }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: products } = await ProductService.getByCategory(
		params?.slug as string
	)
	const { data: category } = await CategoryService.getBySlug(
		params?.slug as string
	)
	return {
		props: {
			products,
			category
		}
	}
}
export default CategoryPage
