import { useAppSelector } from './useAppSelector'

export const useCart = () => {
	const items = useAppSelector(state => state.cart.items)
	const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
	return { items, total }
}
