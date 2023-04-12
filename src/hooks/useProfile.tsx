import { useQuery } from '@tanstack/react-query'

import { UserServices } from '@/service/user.service'

export const useProfile = () => {
	const { data } = useQuery(['get profile'], () => UserServices.getProfile(), {
		select: ({ data }) => data
	})
	return { profile: data }
}
