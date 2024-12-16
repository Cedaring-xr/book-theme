import type { Metadata } from 'next'
import './globals.css'

//google fonts stuff
import { Barlow_Condensed, Inter, Pacifico } from 'next/font/google'
const barlowCondensed = Barlow_Condensed({
	weight: '700',
	subsets: ['latin'],
	variable: '--font-barlow-condensed'
})
const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter'
})
const pacifico = Pacifico({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-pacifico'
})

// native fonts stuff
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: 'Storybook theme',
	description: 'Book styled website for fun'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${barlowCondensed.variable} ${inter.variable} ${pacifico.variable} antialiased`}>
				{children}
			</body>
		</html>
	)
}
