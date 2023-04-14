import { axiosClassic, instance } from '@/api/api.interceptor'

import { ICategory } from '@/interface/category.interface'

export const CategoryService = {
	async getAll() {
		return axiosClassic<ICategory[]>({
			url: 'categories',
			method: 'GET'
		})
	},
	async getById(id: string) {
		return instance<ICategory>({
			url: `categories/${id}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic<ICategory>({
			url: `categories/slug/${slug}`,
			method: 'GET'
		})
	},
	async create() {
		return instance<ICategory>({
			url: 'categories',
			method: 'POST'
		})
	},
	async update(id: string, data: string) {
		return instance<ICategory>({
			url: `categories/${id}`,
			method: 'PUT',
			data
		})
	},
	async delete(id: string) {
		return instance<ICategory>({
			url: `categories/${id}`,
			method: 'DELETE'
		})
	}
}
