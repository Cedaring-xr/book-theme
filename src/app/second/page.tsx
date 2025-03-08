import Header from '@/components/Header'
import React from 'react'

const page = () => {
	return (
		<div>
			<Header />
			<main className="bg-white text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
				<h1 className="text-3xl">Second page</h1>
			</main>
		</div>
	)
}

export default page
