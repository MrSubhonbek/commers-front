import { axiosClassic, instance } from '@/api/api.interceptor'

import {
	IProduct,
	IProductData,
	IProductFilters,
	TypePaginationProduct
} from '@/interface/product.interface'

const Products = 'product'
export const ProductService = {
	async getAll(queryData = {} as IProductFilters) {
		const { data } = await axiosClassic<TypePaginationProduct>({
			url: Products,
			method: 'GET',
			params: queryData
		})
		return data
	},
	async getSimilar(id: string) {
		return axiosClassic<IProduct[]>({
			url: `${Products}/similar/${id}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic<IProduct>({
			url: `${Products}/slug/${slug}`,
			method: 'GET'
		})
	},
	async getById(id: string) {
		return instance<IProduct>({
			url: `${Products}/${id}`,
			method: 'GET'
		})
	},
	async getByCategory(categorySlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${Products}/category/${categorySlug}`,
			method: 'GET'
		})
	},
	async create() {
		return instance<IProduct>({
			url: Products,
			method: 'POST'
		})
	},
	async update(id: string, data: IProductData) {
		return instance<IProduct>({
			url: `${Products}/${id}`,
			method: 'PUT',
			data
		})
	},
	async delete(id: string) {
		return instance<IProduct>({
			url: `${Products}/${id}`,
			method: 'DELETE'
		})
	}
}
