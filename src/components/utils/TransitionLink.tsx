'use client'
import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface TransitionLinkProps extends LinkProps {
	children: ReactNode
	href: string
}

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
	const router = useRouter()
	const handleTransition = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		// run some animation exit
		const body = document.querySelector('body')
		body?.classList.add('page-transition')
		// sleep for some time
		await sleep(500)

		router.push(href)
		await sleep(500)
		body?.classList.remove('page-transition')
		// run entry animation
	}
	return (
		<Link onClick={handleTransition} href={href} {...props}>
			{children}
		</Link>
	)
}

export default TransitionLink
