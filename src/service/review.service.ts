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
	async leave(data: IReviewData) {
		return instance<IReview>({
			url: `${Reviews}/leave/:${data.productId}`,
			method: 'POST',
			data: {
				rating: data.rating,
				text: data.text
			}
		})
	},
	async getAverage(productId: number) {
		return axiosClassic<number>({
			url: `${Reviews}/${productId}`,
			method: 'GET'
		})
	}
}
