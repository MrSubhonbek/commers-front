import cn from 'clsx'
import React, { forwardRef } from 'react'

import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, Icon, className, type = 'text', style, ...rest },
		ref
	) => {
		return (
			<div className={cn('mb-[2vh]', className)} style={style}>
				<label>
					{Icon && <Icon className="mr-3 " />}
					<span className="mb-1 block text-[2vh]">{placeholder}</span>
					<input
						className={cn(
							'px-[1vw] py-[0.5vh] h-[5vh] w-full placeholder:font-light placeholder:text-[2vh] outline-none border border-solid border-gray focus:border-primary transition-all duration-700',
							{
								'border-red': !!error
							}
						)}
						placeholder={placeholder}
						type={type}
						ref={ref}
						{...rest}
					/>
				</label>
				{error && <div className="text-red text-[1.5vh]">{error}</div>}
			</div>
		)
	}
)
Field.displayName = 'Field'

export default Field
