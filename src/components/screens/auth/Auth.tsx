import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/components/ui/Heading'
import { Meta } from '@/components/ui/Meta'
import Button from '@/components/ui/button/Button'

import { useAction } from '@/hooks/useAction'
import { useAuth } from '@/hooks/useAuth'

import { IEmailPassword } from '@/interface/auth.interface'

const Auth: FC = () => {
	const { isLoading } = useAuth()
	const { login, register } = useAction()
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		reset,
		formState
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
				<Button>Auth</Button>
			</form>
		</Meta>
	)
}

export default Auth
