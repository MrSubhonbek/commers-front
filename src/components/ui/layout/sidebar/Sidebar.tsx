import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { useAction } from '@/hooks/useAction'
import { useAuth } from '@/hooks/useAuth'

import Loader from '../../Loader'
import Button from '../../button/Button'

import { CategoryService } from '@/service/category.service'

const Sidebar: FC = () => {
	const { data, isLoading } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data
		}
	)
	const { asPath, replace } = useRouter()
	const { logout } = useAction()
	const { user } = useAuth()
	return (
		<aside className="flex flex-col justify-between bg-secondary text-white min-h-[90vh] h-full">
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className="text-[1.5vw] text-white mt-[1.5vh] text-center">
							Categories:
						</div>
						<ul>
							{data.map(category => (
								<li key={category.id}>
									<Link
										className={cn(
											'block text-[1vw] my-[1vw] px-[1.5vw] hover:text-primary transition-colors duration-200',
											asPath === `/category/${category.slug}`
												? 'text-primary'
												: 'text-white'
										)}
										href={`/category/${category.slug}`}
									>
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<></>
				)}
			</div>
			{user ? (
				<Button className=" py-[0.5vw]" onClick={() => logout()}>
					Logout
				</Button>
			) : (
				<Button className=" py-[0.5vw]" onClick={() => replace('/auth')}>
					Login
				</Button>
			)}
		</aside>
	)
}

export default Sidebar
