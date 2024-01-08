'use client'

// React
import { PropsWithChildren } from 'react'

// Next UI
import { NextUIProvider } from '@nextui-org/react'

// Next Auth
import { SessionProvider } from 'next-auth/react'

export type TProvidersProps = PropsWithChildren

export default function Providers({ children }: TProvidersProps) {
	return (
		<SessionProvider>
			<NextUIProvider>{children}</NextUIProvider>
		</SessionProvider>
	)
}
