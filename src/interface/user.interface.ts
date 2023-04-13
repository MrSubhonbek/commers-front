import { IOrder } from './order.interface'
import { IProduct } from './product.interface'

export interface IUser {
	id: number | string
	email: string
	name: string
	avatarPath: string
	phone: string
}
export interface IUserData {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}
export interface IFullUser extends IUser {
	favorite: IProduct[]
	orders: IOrder[]
}
