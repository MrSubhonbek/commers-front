import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { FiLogIn, FiLogOut } from 'react-icons/fi'

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
						<ul>
							{data.map(category => (
								<li key={category.id}>
									<Link
										className={cn(
											'block  my-[1vw] px-[1.5vw] hover:text-primary transition-colors duration-200',
											asPath === `/category/${category.slug}`
												? 'text-primary'
												: 'text-white'
										)}
										href={`/category/${category.slug}`}
									>
										<h3>{category.name}</h3>
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
				<button
					className="flex justify-center gap-1 items-center py-[0.5vw] hover:text-primary transition-colors duration-200"
					onClick={() => logout()}
				>
					<FiLogOut /> Logout
				</button>
			) : (
				<button
					className="flex justify-center items-center gap-1 py-[0.5vw] hover:text-primary transition-colors duration-200"
					onClick={() => replace('/auth')}
				>
					<FiLogIn /> Login
				</button>
			)}
		</aside>
	)
}

export default Sidebar
