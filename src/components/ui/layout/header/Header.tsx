import Link from 'next/link'
import React, { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

import Search from './Search'

const Header: FC = () => {
	return (
		<header
			className="bg-secondary w-full px-[2vw] py-[2vh] grid text-white"
			style={{ gridTemplateColumns: '1fr 3fr 1.2fr' }}
		>
			<Link href={'/'}>Logo</Link>
			<Search />
			<div className="flex items-center justify-end gap-[3vw]">
				<Link href={'/favorites'} className="text-white">
					<AiOutlineHeart />
				</Link>
				{
					//<HeaderCart />
					//<HeaderProfile />
				}
			</div>
		</header>
	)
}

export default Header
