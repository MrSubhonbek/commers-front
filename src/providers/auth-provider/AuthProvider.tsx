import { FC, PropsWithChildren } from 'react'

import { TypeComponentAuthFields } from './auth-page.type'

export const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlyUser },
	children
}) => {
	return <div>AuthProvider</div>
}
