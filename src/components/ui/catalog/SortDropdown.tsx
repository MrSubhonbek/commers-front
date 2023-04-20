import React, { useState } from 'react'
import Select from 'react-select'

import { EnumProductSort } from '@/interface/product.interface'

const SortDropdown = () => {
	const [selectedOption, setSelectedOption] = useState<string | undefined>()

	const options = [
		{ value: EnumProductSort.NEWEST, label: 'Chocolate' },
		{ value: EnumProductSort.OLDEST, label: 'Strawberry' },
		{ value: EnumProductSort.LOW_PRICE, label: 'Vanilla' },
		{ value: EnumProductSort.HIGH_PRICE, label: 'Vanilla' }
	]
	return (
		<div className="px-[3vw] pt-[3vw]">
			<Select
				className="absolute z-20 "
				options={options}
				theme={theme => ({
					...theme,
					borderRadius: 0,
					colors: {
						...theme.colors,
						primary25: '#F2F2F5',
						primary: '#FF9902'
					}
				})}
				onChange={selectedOption => {
					setSelectedOption(selectedOption?.value)
				}}
			/>
		</div>
	)
}

export default SortDropdown
