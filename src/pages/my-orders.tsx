import { useQuery } from '@tanstack/react-query'
import React from 'react'

import Heading from '@/components/ui/Heading'
import { Meta } from '@/components/ui/Meta'
import Layout from '@/components/ui/layout/Layout'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.type'

import { convertPrice } from '@/utils/convertPrice'

import { OrderService } from '@/service/order.service'

const MyOrders: NextPageAuth = () => {
	const { data: orders } = useQuery(
		['my orders'],
		() => OrderService.getAll(),
		{
			select: ({ data }) => data
		}
	)
	return (
		<Meta title="My Orders">
			<Layout>
				<Heading title="My Orders" />
				<section>
					{orders?.length ? (
						orders.map(order => (
							<div
								key={order.id}
								className="bg-primary text-white flex justify-between px-8 py-4 mt-4"
							>
								<span>#{order.id}</span>
								<span>{new Date(order.createdAt).toLocaleDateString()}</span>
								<span>{convertPrice(order.total)}</span>
							</div>
						))
					) : (
						<div>Order not found!</div>
					)}
				</section>
			</Layout>
		</Meta>
	)
}
MyOrders.isOnlyUser = true
export default MyOrders
