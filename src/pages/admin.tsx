import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/components/ui/Heading'
import { Meta } from '@/components/ui/Meta'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'
import Layout from '@/components/ui/layout/Layout'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.type'

import { useProfile } from '@/hooks/useProfile'

import { convertPrice } from '@/utils/convertPrice'

import { TypeCreate } from '@/interface/product.interface'
import { ProductService } from '@/service/product.service'

const AdminPage: NextPageAuth = () => {
	const { profile } = useProfile()
	const isAdmin = profile?.email !== 'admin@gmail.com'
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { mutate } = useMutation(['create product'], (data: TypeCreate) =>
		ProductService.create({
			slug: data.name.toLowerCase(),
			userId: Number(profile?.id),
			name: data.name,
			descriptios: data.descriptios,
			images: data.images,
			price: data.price,
			categoryId: data.categoryId
		})
	)
	const { mutate: deleteItem } = useMutation(['delete product'], (id: string) =>
		ProductService.delete(id)
	)
	const { data: response, isLoading } = useQuery(['product'], () =>
		ProductService.getAll()
	)

	const {
		register: formRegister,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<any>({
		mode: 'onChange'
	})
	const showModal = () => {
		setIsModalOpen(true)
	}
	const onSubmit: SubmitHandler<TypeCreate> = data => {
		mutate({
			...data,
			//@ts-ignore
			images: data.images.split(','),
			categoryId: 4,
			price: +data.price
		})
		reset()
	}

	const handleCancel = () => {
		setIsModalOpen(false)
		window.location.reload()
	}

	return (
		<Meta title="Admin">
			<Layout>
				{isAdmin ? (
					<Heading title="You are not an admin!" />
				) : (
					<>
						<Heading title="Товары" className="pl-8" />
						{response?.product.map((item, index) => (
							<div
								key={index}
								className="px-8 flex justify-between py-4 bg-primary text-white mt-8"
							>
								<div className="flex gap-8">
									<span>#{item.id}</span>
									<span>{item.name}</span>
								</div>
								<div className="flex gap-8 items-center">
									<span>{convertPrice(item.price)}</span>
									<Button
										variant="white"
										onClick={() => {
											deleteItem(item.id.toString())
											window.location.reload()
										}}
									>
										Удалить
									</Button>
								</div>
							</div>
						))}
						<Button onClick={showModal} className="mt-8 px-8 py-4">
							Добавить товар
						</Button>
					</>
				)}
				{isModalOpen ? (
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
							<div className="relative w-auto my-6 mx-auto max-w-3xl">
								<div className="border-0 min-w-[30vw] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
									<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
										<h3 className="text-3xl font-semibold">Добавить товар</h3>
										<button
											className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
											onClick={() => setIsModalOpen(false)}
										>
											<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
												×
											</span>
										</button>
									</div>
									<div className="relative p-6 flex-auto">
										<Field
											placeholder="Имя товара"
											{...formRegister('name', {
												required: 'name is required'
											})}
										/>
										<Field
											placeholder="Цена товара"
											{...formRegister('price', {
												required: 'price is required'
											})}
										/>
										<Field
											placeholder="Ссылка на фото товара"
											{...formRegister('images', {
												required: 'images is required'
											})}
										/>
										<Field
											placeholder="Описание"
											{...formRegister('descriptios', {
												required: 'descriptios is required'
											})}
										/>
									</div>
									<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
										<button
											className="text-red-500 background-transparent border font-bold uppercase px-6 py-2 text-sm outline-none  mr-1 mb-1 ease-linear transition-all duration-150"
											type="button"
											onClick={handleCancel}
										>
											Закрыть
										</button>
										<button
											className="bg-primary text-white  font-bold uppercase text-sm px-6 py-2 border-2 border-primary shadow hover:shadow-lg outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											type="submit"
										>
											Сохранить
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					</form>
				) : null}
			</Layout>
		</Meta>
	)
}
AdminPage.isOnlyUser = true

export default AdminPage
