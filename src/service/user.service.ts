import { instance } from '@/api/api.interceptor'

import { IFullUser, IUser, IUserData } from '@/interface/user.interface'

const Users = 'users'
export const UserServices = {
	async getProfile() {
		return instance<IFullUser>({
			url: `${Users}/profile`,
			method: 'GET'
		})
	},
	async update(data: IUserData) {
		return instance<IUser>({
			url: `${Users}/profile`,
			method: 'PUT',
			data
		})
	},
	async toggleFavorite(productId: string) {
		return instance<IUser>({
			url: `${Users}/profile/favorite/${productId}`,
			method: 'PATCH'
		})
	}
}
