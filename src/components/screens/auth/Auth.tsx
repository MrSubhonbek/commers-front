import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'
import { Meta } from '@/components/ui/Meta'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'

import { useAction } from '@/hooks/useAction'
import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

import { validEmail } from './valid-email'
import { IEmailPassword } from '@/interface/auth.interface'

const Auth: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const { login, register } = useAction()
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})
	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') login(data)
		else register(data)

		reset()
	}
	if (isLoading)
		return (
			<div className="flex w-screen h-screen items-center justify-center">
				<div className="w-[20vh] h-[20vh]">
					<Loader />
				</div>
			</div>
		)
	return (
		<Meta title="Auth">
			<section className="flex h-screen bg-white max-md:flex max-md:flex-col justify-center">
				<img
					src="/photo_2023-05-09_13-12-43.jpg"
					className="absolute -left-16 -top-16 max-md:left-0 max-md:top-0"
					alt=""
				/>
				<form
					className=" bg-bg-color shadow-md absolute right-[20vh] top-[20vh] z-10 p-[3vh] m-auto max-md:static"
					onSubmit={handleSubmit(onSubmit)}
				>
					<Heading
						title={type === 'register' ? 'Регистрация' : 'Логин'}
						className="text-center text-[3vh] h-[3vh]"
					/>

					<Field
						placeholder="Email"
						error={errors.email?.message}
						{...formRegister('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'PLease enter a valid Email address'
							}
						})}
					/>
					<Field
						placeholder="Пароль"
						error={errors.password?.message}
						type="password"
						{...formRegister('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should more 6 symbols'
							}
						})}
					/>
					<div className="flex justify-between">
						<Button type="submit">Войти</Button>
						<button
							type="button"
							onClick={() => setType(type === 'login' ? 'register' : 'login')}
							className="opacity-20"
						>
							{type === 'login' ? 'Регистрация' : 'Войти'}
						</button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
