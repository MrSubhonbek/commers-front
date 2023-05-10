import { NextPage } from 'next'
import React from 'react'

import Heading from '@/components/ui/Heading'
import { Meta } from '@/components/ui/Meta'
import Layout from '@/components/ui/layout/Layout'

const ThanksPage: NextPage = () => {
	return (
		<Meta title="Thanks">
			<Layout>
				<Heading title="Thanks!" />
			</Layout>
		</Meta>
	)
}

export default ThanksPage
