import React, { FC } from 'react'

interface IHeading {
	title: string
	className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<h1
			className={`text-opacity-80 text-[#123133] font-semibold ${
				className?.includes('xl') ? '' : 'text-[2vw]'
			} ${className}`}
		>
			{title}
		</h1>
	)
}

export default Heading
