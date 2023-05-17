import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'

const Search: FC = () => {
	const { replace } = useRouter()
	const [searchText, setSearchText] = useState('')

	return (
		<div className="relative w-full">
			<input
				type="search"
				onChange={e => setSearchText(e.currentTarget.value)}
				id="search-dropdown"
				className="block p-2.5 w-full h-[4vh] z-20 text-sm text-white bg-secondary placeholder:text-[1vw] border border-[#e5e5e5] outline-none "
				placeholder="Search..."
			/>
			<button
				onClick={() => {
					if (searchText) replace(`/q?searchTerm=${searchText}`)
				}}
				className="absolute top-0 right-0 h-[4vh] w-[4vh] flex items-center justify-center p-2.5 text-sm font-medium text-black bg-[#e5e5e5] border border-[#e5e5e5] outline-none hover:bg-primary/90"
			>
				<svg
					aria-hidden="true"
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					></path>
				</svg>
				<span className="sr-only">Search</span>
			</button>
		</div>
	)
}

export default Search
