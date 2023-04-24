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
			className="h-[2vw] rounded-full w-[2vw] bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 relative"
		>
			{!!number && (
				<span className="flex h-[1vw] w-[1vw] items-center justify-center rounded-full bg-white p-[0.2vw] text-[0.7vw] text-secondary absolute -top-1 -right-1">
					{number}
				</span>
			)}
			<Icon className="text-secondary" />
		</button>
	)
}

export default SquareButton
