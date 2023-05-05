import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/HeaderCart'

const Header: FC = () => {
	return (
		<header
			className="bg-secondary w-full items-center px-[1vw] grid text-white h-[10vh]"
			style={{ gridTemplateColumns: '1fr 3fr 1.2fr' }}
		>
			<Link href={'/'} className="w-fit text-[2vw] text-white font-serif ">
				July Flowers
			</Link>
			<Search />
			<div className="flex items-center justify-end gap-[2vw]">
				<Link href={'/favorites'} className="text-white">
					<div className="h-[2vw] rounded-full w-[2vw] bg-[#A86550] flex items-center justify-center hover:bg-[#A86550]/90 transition-colors duration-200 relative">
						<AiOutlineHeart />
					</div>
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
