import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { IRootState } from '../store/store'

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
