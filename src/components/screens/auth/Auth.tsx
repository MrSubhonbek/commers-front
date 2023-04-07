import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/components/ui/Heading'
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
	const onSubmit: SubmitHandler<IEmailPassword> = data => {}
	return (
		<>
			<Heading title="Title" />
			<Button variant="white">Auth</Button>
		</>
	)
}

export default Auth
