import React from 'react'

import Sidebar from '../sidebar/Sidebar'

interface TypeMenuProps {
	active: boolean
	setActive: (value: boolean) => void
}

export const BurgerMenu = ({ active, setActive }: TypeMenuProps) => {
	return (
		<div
			className={
				'fixed right-0 top-0 z-30 overflow-y-auto overflow-x-hidden bg-primary'
			}
		>
			<div
				className={
					active
						? 'flex h-screen w-screen transform  justify-center text-black transition-all duration-500'
						: 'flex h-screen w-0 translate-x-60 transform justify-center bg-white text-black opacity-0 transition-all duration-500'
				}
			>
				<div className={'container m-0'}>
					<div
						className={
							'flex items-center justify-between text-white border-b p-3'
						}
					>
						<span>Категории</span>
						<svg
							onClick={() => setActive(false)}
							aria-hidden="true"
							fill="gray"
							className="cursor-pointer"
							width={30}
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
					<Sidebar />
				</div>
			</div>
		</div>
	)
}
