import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	descriptios: string
	price: number
	reviews: IReview[]
	images: string[]
	createdAt: string
	category: ICategory
}
export interface IProductDetails {
	product: IProduct
}
export interface IProductData {
	name: string
	price?: number
	description?: string
	images?: string[]
	categoryId: number
}
export type TypeProductData = {
	name: string
	price: number
	description?: string
	images: string[]
	categoryId: number
}
export interface IProductFilters {
	sort?: EnumProductSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}
export enum EnumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}
export type TypeProduct = {
	product: IProduct[]
}
export type TypePaginationProduct = {
	product: IProduct[]
	length: number
}
export type TypeCreate = {
	name: string
	userId?: number
	images: string[]
	slug: string
	descriptios: string
	price: number
	categoryId: number
}
