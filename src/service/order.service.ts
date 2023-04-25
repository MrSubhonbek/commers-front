import { instance } from '@/api/api.interceptor'

import { IOrder } from '@/interface/order.interface'
import { TypeData } from '@/interface/payment.interface'

const Order = 'order'
export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: Order,
			method: 'GET'
		})
	},
	async place(data: TypeData) {
		return instance<{ confirmation: { confirmation_url: string } }>({
			url: Order,
			method: 'POST',
			data
		})
	}
}
