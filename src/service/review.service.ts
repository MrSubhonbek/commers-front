import { axiosClassic, instance } from '@/api/api.interceptor'

import { IReview, IReviewData } from '@/interface/review.interface'

const Reviews = 'review'
export const ReviewService = {
	async getAll() {
		return axiosClassic<IReview[]>({
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
	},
	async getAverage(productId: number) {
		return axiosClassic<number>({
			url: `${Reviews}/${productId}`,
			method: 'GET'
		})
	}
}
