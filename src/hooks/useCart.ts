import { useAppSelector } from './useAppSelector'

export const useCart = () => useAppSelector(state => state.cart)
