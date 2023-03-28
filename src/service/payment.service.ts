import { instance } from '@/api/api.interceptor'

import { IPaymentResponse } from '@/interface/payment.interface'

const Payment = 'payment'
export const PaymentService = {
	async createPayment(amount: number) {
		return instance.post<IPaymentResponse>(Payment, { amount })
	}
}
