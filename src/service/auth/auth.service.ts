import axios from 'axios'
import Cookies from 'js-cookie'

import { getContentType } from '@/api/api.helper'

import { saveToStorage } from './auth.helper'
import { IAuthResponse, IEmailPassword } from '@/interface/auth.interface'

export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await axios<IAuthResponse>({
			url: `/auth${type}`,
			method: 'POST',
			data
		})
	},
	async getNewTokens() {
		const refreshToken = Cookies.get('refresh')
		const response = await axios.post<string, { data: IAuthResponse }>(
			process.env.SERVER_URL + 'auth/login/access-token',
			{ refreshToken },
			{
				headers: getContentType()
			}
		)
		if (response.data.accessToken) {
			saveToStorage(response.data)
		}
		return response
	}
}
