import { instance } from '@/api/api.interceptor'

import { IReview, IReviewData } from '@/interface/review.interface'

const Reviews = 'reviews'
export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: Reviews,
			method: 'GET'
		})
	},
	async leave(productId: string, data: IReviewData) {
		return instance<IReview>({
			url: `${Reviews}/leave/:${productId}`,
			method: 'POST',
			data
		})
	}
}
