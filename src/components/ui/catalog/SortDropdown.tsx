import React, { FC } from 'react'
import Select from 'react-select'

import { EnumProductSort } from '@/interface/product.interface'

interface ISortDropdownProps {
	sortType: EnumProductSort
	setSortType: (value: EnumProductSort) => void
}

const SortDropdown: FC<ISortDropdownProps> = ({ setSortType }) => {
	const options = [
		{ value: EnumProductSort.NEWEST, label: 'Новое' },
		{ value: EnumProductSort.OLDEST, label: 'Старые' },
		{ value: EnumProductSort.LOW_PRICE, label: 'Низкие цены' },
		{ value: EnumProductSort.HIGH_PRICE, label: 'Высокие цены' }
	]
	return (
		<div className="flex justify-end">
			<div className="w-[30vw]">
				<Select
					className="absolute text-[#123133] z-20 mx-[3.5vw] mt-[3vw]"
					options={options}
					defaultValue={options[0]}
					theme={theme => ({
						...theme,
						borderRadius: 0,
						colors: {
							...theme.colors,
							primary25: '#F2F2F5',
							primary: '#123133'
						}
					})}
					onChange={selectedOption => {
						if (selectedOption) setSortType(selectedOption.value)
					}}
				/>
			</div>
		</div>
	)
}

export default SortDropdown
