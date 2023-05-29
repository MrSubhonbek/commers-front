import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { useProfile } from '@/hooks/useProfile'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	return (
		<div>
			{profile?.avatarPath && (
				<Link href={'/my-orders'}>
					<Image
						width={43}
						height={43}
						src={profile.avatarPath}
						alt="profile avatar"
						className="rounded-full border border-solid animate-opacity w-[25px] h-[25px]"
					/>
				</Link>
			)}
		</div>
	)
}

export default HeaderProfile
