import React, { FC } from 'react'
import Select from 'react-select'

import { EnumProductSort } from '@/interface/product.interface'

interface ISortDropdownProps {
	sortType: EnumProductSort
	setSortType: (value: EnumProductSort) => void
}

const SortDropdown: FC<ISortDropdownProps> = ({ setSortType }) => {
	const options = [
		{ value: EnumProductSort.NEWEST, label: EnumProductSort.NEWEST },
		{ value: EnumProductSort.OLDEST, label: EnumProductSort.OLDEST },
		{ value: EnumProductSort.LOW_PRICE, label: EnumProductSort.LOW_PRICE },
		{ value: EnumProductSort.HIGH_PRICE, label: EnumProductSort.HIGH_PRICE }
	]
	return (
		<div className="flex justify-end">
			<div className="w-fit">
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
