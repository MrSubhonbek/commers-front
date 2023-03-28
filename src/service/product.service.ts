import { instance } from '@/api/api.interceptor'

import {
	IProduct,
	IProductData,
	IProductFilters
} from '@/interface/product.interface'

const Products = 'products'
export const ProductService = {
	async getAll(queryData = {} as IProductFilters) {
		return instance<IProduct[]>({
			url: Products,
			method: 'GET',
			params: queryData
		})
	},
	async getSimilar(id: string) {
		return instance<IProduct[]>({
			url: `${Products}/similar/${id}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return instance<IProduct>({
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
		return instance<IProduct[]>({
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
