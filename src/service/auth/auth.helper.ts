import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/interface/auth.interface'

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('refresh', data.refreshToken)
	Cookies.set('access', data.accessToken)
}
export const removeTokensStorage = () => {
	Cookies.remove('refresh')
	Cookies.remove('access')
}
export const getAccessToken = () => {
	const accessToken = Cookies.get('accessToken')
	return accessToken || null
}
export const getUserFromStorage = () => {
	return JSON.parse(localStorage.getItem('user') || '{}')
}
export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
