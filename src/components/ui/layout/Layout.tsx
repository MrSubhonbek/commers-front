import React, { FC, PropsWithChildren } from 'react'

import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<Header />
			<div
				className="grid max-md:block"
				style={{
					gridTemplateColumns: '1fr 4fr'
				}}
			>
				<div className="max-md:hidden">
					<Sidebar />
				</div>
				<main
					className="p-[3vh] bg-[url('/photo_2023-05-05_16-51-33.jpg')]"
					style={{ backgroundSize: '100%' }}
				>
					{children}
				</main>
			</div>
		</div>
	)
}

export default Layout
