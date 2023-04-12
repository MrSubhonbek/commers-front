import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/components/ui/Heading'
import { Meta } from '@/components/ui/Meta'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'

import { useAction } from '@/hooks/useAction'
import { useAuth } from '@/hooks/useAuth'

import { validEmail } from './valid-email'
import { IEmailPassword } from '@/interface/auth.interface'

const Auth: FC = () => {
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
	return (
		<Meta title="Auth">
			<Heading title="Title" />
			<form onSubmit={handleSubmit(onSubmit)}>
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
					placeholder="Password"
					error={errors.password?.message}
					type="password"
					{...formRegister('email', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Min length should more 6 symbols'
						}
					})}
				/>
				<Button>Auth</Button>
			</form>
		</Meta>
	)
}

export default Auth
