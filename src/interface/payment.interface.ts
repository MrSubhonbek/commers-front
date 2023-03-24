interface Amount {
	value: string
	currency: string
}

interface Recipient {
	account_id: string
	gateway_id: string
}

interface Confirmation {
	type: string
	returnUrl: string
	confirmationUrl: string
}
interface PaymentMethod {
	type: string
	id: string
	saved: boolean
}

export interface IPaymentResponse {
	id: string
	status: string
	amount: Amount
	recipient: Recipient
	paymentMethod: PaymentMethod
	createdAt: Date
	confirmation: Confirmation
}
