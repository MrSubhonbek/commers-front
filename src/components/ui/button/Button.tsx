import cn from 'clsx'
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'orange' | 'white'
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
				'rounded-full shadow-sm font-medium px-4 py-2',
				{ 'text-white bg-primary': variant === 'orange' },
				{ 'text-primary bg-white': variant === 'white' },
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
export default Button
