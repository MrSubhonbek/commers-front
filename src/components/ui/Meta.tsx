import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'

interface ISeo {
	title: string
	description?: string
	image?: string
}
export const titleMerge = (title: string) => `${title} | commerce`

export const Meta: FC<PropsWithChildren<ISeo>> = ({
	title,
	children,
	description
}) => {
	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp="description"
							name="description"
							content={description}
						/>
						<meta property="og:locale" content="en" />
						<meta property="og:title" content={titleMerge(title)} />
						<meta property="og:description" content={description} />
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
			{children}
		</>
	)
}
