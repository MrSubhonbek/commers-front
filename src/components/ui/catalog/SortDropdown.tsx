import React, { useState } from 'react'
import Select, { components } from 'react-select'

const SortDropdown = () => {
	const [selectedOption, setSelectedOption] = useState<string | undefined>()
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
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
					console.log(selectedOption?.value)

					setSelectedOption(selectedOption?.value)
				}}
			/>
		</div>
	)
}

export default SortDropdown
