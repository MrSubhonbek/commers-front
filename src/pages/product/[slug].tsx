import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Product from '@/components/screens/product/Product'
import { Meta } from '@/components/ui/Meta'
import Layout from '@/components/ui/layout/Layout'

import { IProduct } from '@/interface/product.interface'
import { ProductService } from '@/service/product.service'

interface IProductPageProps {
	product: IProduct
}
const ProductPage: NextPage<IProductPageProps> = ({ product }) => {
	return (
		<Meta title={product.name}>
			<Layout>
				<Product product={product} />
			</Layout>
		</Meta>
	)
}
export const getStaticPaths: GetStaticPaths = async () => {
	const { product } = await ProductService.getAll()
	const paths = product.map(category => {
		return {
			params: { slug: category.slug }
		}
	})

	return { paths, fallback: 'blocking' }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: product } = await ProductService.getBySlug(
		params?.slug as string
	)
	return {
		props: {
			product
		}
	}
}
export default ProductPage
