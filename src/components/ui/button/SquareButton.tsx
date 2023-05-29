import React, { FC } from 'react'
import { IconType } from 'react-icons'

interface ISquareButtonProps {
	Icon: IconType
	onClick?: () => void
	number?: number
}
const SquareButton: FC<ISquareButtonProps> = ({ Icon, number, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="h-[25px] rounded-full w-[25px] bg-[#A86550] flex items-center justify-center hover:bg-[#A86550]/90 transition-colors duration-200 relative"
		>
			{!!number && (
				<span className="flex h-[1vw] w-[1vw] items-center text-[#123133] justify-center rounded-full bg-white p-[0.2vw] text-[0.7vw] absolute -top-1 -right-1">
					{number}
				</span>
			)}
			<Icon className="text-white" />
		</button>
	)
}

export default SquareButton
