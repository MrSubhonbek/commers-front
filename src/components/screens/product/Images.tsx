import Image from 'next/image'
import React, { FC } from 'react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

interface IImageProps {
	images: string[]
}
const Images: FC<IImageProps> = ({ images }) => {
	const handleShowProduct = images.map((image, index) => (
		<SwiperSlide key={index}>
			<Image alt={'images'} src={image} width={640} height={480} />
		</SwiperSlide>
	))
	return (
		<Swiper
			pagination={true}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false
			}}
			loop={true}
			modules={[Autoplay, Pagination]}
			className="mySwiper"
		>
			{handleShowProduct}
		</Swiper>
	)
}

export default Images
