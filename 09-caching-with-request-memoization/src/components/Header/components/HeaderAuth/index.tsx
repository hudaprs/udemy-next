'use client'

// React
import { memo } from 'react'

// Next UI
import {
	NavbarItem,
	Button,
	Avatar,
	Popover,
	PopoverTrigger,
	PopoverContent
} from '@nextui-org/react'

// Next Auth
import { useSession } from 'next-auth/react'

// Actions
import * as actions from '@/actions'

const HeaderAuth = memo(() => {
	const { data, status } = useSession()

	if (status === 'loading') {
		return null
	} else if (data?.user) {
		return (
			<Popover placement='left'>
				<PopoverTrigger>
					<Avatar src={data.user.image || ''} />
				</PopoverTrigger>
				<PopoverContent>
					<div className='p-4'>
						<form action={actions.signOut}>
							<Button type='submit'>Sign Out</Button>
						</form>
					</div>
				</PopoverContent>
			</Popover>
		)
	} else {
		return (
			<>
				<NavbarItem>
					<form action={actions.signIn}>
						<Button type='submit' color='secondary' variant='bordered'>
							Sign In
						</Button>
					</form>
				</NavbarItem>

				<NavbarItem>
					<form action={actions.signIn}>
						<Button type='submit' color='primary' variant='flat'>
							Sign Up
						</Button>
					</form>
				</NavbarItem>
			</>
		)
	}
})

HeaderAuth.displayName = 'HeaderAuth'

export { HeaderAuth }
