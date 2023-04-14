import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { useAction } from '@/hooks/useAction'
import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'
import { useProfile } from '@/hooks/useProfile'

import { UserServices } from '@/service/user.service'

interface IProductItemProps {
	productId: string | number
}
const FavoriteButton: FC<IProductItemProps> = ({ productId }) => {
	const { user } = useAuth()
	if (!user) return null

	const { profile } = useProfile()
	const { invalidateQueries } = useQueryClient()
	const { mutate } = useMutation(
		['toggle favorite'],
		() => UserServices.toggleFavorite(productId.toString()),
		{
			onSuccess() {
				invalidateQueries(['get profile'])
			}
		}
	)
	console.log(profile)

	const isExists = profile.favorite.some(favorite => favorite.id === productId)

	return (
		<div>
			<button onClick={() => mutate()}>
				{isExists ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	)
}

export default FavoriteButton
