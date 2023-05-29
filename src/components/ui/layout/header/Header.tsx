import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'

import { BurgerMenu } from './BurgerMenu'
import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/HeaderCart'

const Header: FC = () => {
	const [isShowMenu, setIsShowMenu] = useState(false)
	return (
		<header
			className="bg-secondary w-full items-center  grid text-white h-[10vh] max-md:flex max-md:justify-between"
			style={{ gridTemplateColumns: '1fr 3fr 1.2fr' }}
		>
			<BiMenu
				className="md:hidden text-[24px] ml-5"
				onClick={() => setIsShowMenu(!isShowMenu)}
			/>
			<Link
				href={'/'}
				className="w-fit text-[24px] ml-5 text-white font-serif "
			>
				July Flowers
			</Link>
			<Search />
			<div className="flex items-center justify-end gap-[2vw]">
				<Link href={'/favorites'} className="text-white">
					<div className="h-[25px] rounded-full w-[25px] bg-[#A86550] flex items-center justify-center hover:bg-[#A86550]/90 transition-colors duration-200 relative">
						<AiOutlineHeart />
					</div>
				</Link>
				<HeaderCart />
				<HeaderProfile />
				<BurgerMenu active={isShowMenu} setActive={setIsShowMenu} />
			</div>
		</header>
	)
}

export default Header
