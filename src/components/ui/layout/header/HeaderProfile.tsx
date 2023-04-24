import Image from 'next/image'
import React, { FC } from 'react'

import { useProfile } from '@/hooks/useProfile'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	return (
		<div>
			{profile?.avatarPath && (
				<Image
					width={43}
					height={43}
					src={profile.avatarPath}
					alt="profile avatar"
					className="rounded-full border border-solid animate-opacity w-[2vw] h-[2vw]"
				/>
			)}
		</div>
	)
}

export default HeaderProfile
