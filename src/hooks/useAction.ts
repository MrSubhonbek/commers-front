import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { Actions } from '@/store/actions'

export const useAction = () => {
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(Actions, dispatch), [dispatch])
}
