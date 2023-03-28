export interface IUser {
	id: number
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
