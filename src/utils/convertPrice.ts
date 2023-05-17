export const convertPrice = (price: number) => {
	return price.toLocaleString('Ru-ru', {
		style: 'currency',
		currency: 'RUB'
	})
}
