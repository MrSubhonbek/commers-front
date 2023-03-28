import { instance } from '@/api/api.interceptor'

import { IOrder } from '@/interface/order.interface'

const Order = 'order'
export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: Order,
			method: 'GET'
		})
	}
}
