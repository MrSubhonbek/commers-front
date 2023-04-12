import cn from 'clsx'
import React, { forwardRef } from 'react'

import styles from './Field.module.scss'
import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, Icon, className, type = 'text', style, ...rest },
		ref
	) => {
		return (
			<div className={cn('', className)} style={style}>
				<label>
					{Icon && <Icon className="mr-3" />}
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...rest} />
				</label>
				{error && <div className={styles.error}>{error}</div>}
			</div>
		)
	}
)
Field.displayName = 'Field'

export default Field
