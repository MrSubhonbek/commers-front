import cn from 'clsx'
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'orange' | 'white' | 'dark'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant = 'orange',
	...rest
}) => {
	return (
		<button
			className={cn(
				' shadow-sm font-medium px-[1vw] py-[0.5vh] hover:shadow-lg transition duration-300 ease-in-out',
				{ 'text-white bg-primary': variant === 'orange' },
				{ 'text-primary bg-white shadow-md': variant === 'white' },
				{ 'text-white bg-secondary shadow-md': variant === 'dark' },
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
export default Button
