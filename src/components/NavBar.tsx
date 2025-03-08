import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import TransitionLink from './utils/TransitionLink'

const NavBar = () => {
	return (
		<div className="flex items-center gap-6">
			<Link href="/">
				<Logo />
			</Link>
			<TransitionLink href="/about">About</TransitionLink>
			<TransitionLink href="/second">Second</TransitionLink>
		</div>
	)
}

export default NavBar
