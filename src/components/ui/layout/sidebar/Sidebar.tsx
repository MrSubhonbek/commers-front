import React from 'react'

import { useAction } from '@/hooks/useAction'

const Sidebar = () => {
	const { logout } = useAction()
	return (
		<aside className="h-full min-h-screen bg-secondary text-white">
			Sidebar
			<button
				onClick={() => {
					logout()
					console.log('logout')
				}}
			>
				logout
			</button>
		</aside>
	)
}

export default Sidebar
