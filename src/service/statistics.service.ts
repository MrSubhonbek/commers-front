import { instance } from '@/api/api.interceptor'

import { IStatistics } from '@/interface/statistics.interface'

const STATISTICS = 'statistics'
export const StatisticsService = {
	async getMain() {
		return instance<IStatistics>({
			url: `${STATISTICS}/main`
		})
	}
}
