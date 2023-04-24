import React, { FC } from 'react'

const Search: FC = () => {
	return (
		<div className="relative w-full">
			<input
				type="search"
				id="search-dropdown"
				className="block p-2.5 w-full h-[4vh] z-20 text-sm text-white bg-secondary border border-primary outline-none "
				placeholder="Search..."
			/>
			<button
				type="submit"
				className="absolute top-0 right-0 h-[4vh] w-[4vh] flex items-center justify-center p-2.5 text-sm font-medium text-white bg-primary border outline-none hover:text-primary hover:bg-bg-color"
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
