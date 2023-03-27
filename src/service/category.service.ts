import { instance } from '@/api/api.interceptor'

import { ICategory } from '@/interface/category.interface'

export const CategoryService = {
	async getAll() {
		return instance<ICategory[]>({
			url: 'category',
			method: 'GET'
		})
	},
	async getById(id: string) {
		return instance<ICategory>({
			url: `category/${id}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return instance<ICategory>({
			url: `category/slug/${slug}`,
			method: 'GET'
		})
	},
	async create() {
		return instance<ICategory>({
			url: 'category',
			method: 'POST'
		})
	},
	async update(id: string, data: string) {
		return instance<ICategory>({
			url: `category/${id}`,
			method: 'PUT',
			data
		})
	},
	async delete(id: string) {
		return instance<ICategory>({
			url: `category/${id}`,
			method: 'DELETE'
		})
	}
}
