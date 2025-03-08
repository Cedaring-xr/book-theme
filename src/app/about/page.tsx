import Header from '@/components/Header'
import React from 'react'

function about() {
	return (
		<div>
			<Header />
			<main className="bg-white text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
				<h1 className="text-3xl">about page</h1>
			</main>
		</div>
	)
}

export default about
